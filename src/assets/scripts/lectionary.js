// Import directly from lib files to bypass the package's broken named re-exports

import lectionary1yr from "../../../node_modules/@stanlemon/lectionary/data/lsb-1yr.json";
import commemorations from "../../../node_modules/@stanlemon/lectionary/data/lsb-commemorations.json";
import daily from "../../../node_modules/@stanlemon/lectionary/data/lsb-daily.json";
import festivals from "../../../node_modules/@stanlemon/lectionary/data/lsb-festivals.json";
import { CalendarBuilder } from "../../../node_modules/@stanlemon/lectionary/lib/CalendarBuilder.js";
import { KeyLoader } from "../../../node_modules/@stanlemon/lectionary/lib/KeyLoader.js";

// Inlined subset of @stanlemon/lectionary/lib/utils.js (not re-exported by the package)
function findPropersByType(propers, types) {
	const matches = {};
	if (!Array.isArray(propers) || !Array.isArray(types)) return matches;
	const remaining = new Set(types);
	for (const proper of propers) {
		if (!remaining.has(proper.type)) continue;
		matches[proper.type] = proper;
		remaining.delete(proper.type);
		if (remaining.size === 0) break;
	}
	return matches;
}

function hasReadings(propers) {
	const m = findPropersByType(propers, [1, 2]);
	return !!(m[1] && m[2]);
}

function festivalHasPrecedence(week) {
	if (week == null) return false;
	return (week >= 6 && week <= 12) || week >= 57;
}

function getDisplayPropers({ week, lectionary = [], festivals = [] }) {
	const festFirst = festivalHasPrecedence(week);
	const primary =
		lectionary.length === 0
			? festivals
			: festivals.length === 0
				? lectionary
				: festFirst
					? festivals
					: lectionary;
	const secondary =
		lectionary.length > 0 && festivals.length > 0
			? festFirst
				? lectionary
				: festivals
			: [];
	return [primary, secondary].filter(hasReadings);
}

function findColor(...allPropers) {
	for (const propers of allPropers) {
		if (!Array.isArray(propers)) continue;
		const match = propers.find((p) => p.type === 25);
		if (match) return match.text;
	}
	return null;
}

const loader = new KeyLoader({
	lectionary: lectionary1yr,
	festivals,
	daily,
	commemorations,
});

const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth() + 1;

function getMonthLabel(year, month) {
	return new Date(year, month - 1, 1).toLocaleString("en-US", {
		month: "long",
		year: "numeric",
	});
}

function isToday(luxonDate) {
	return (
		luxonDate.day === today.getDate() &&
		luxonDate.month === today.getMonth() + 1 &&
		luxonDate.year === today.getFullYear()
	);
}

function getSundayReadings(day) {
	const displayPropers = getDisplayPropers({
		week: day.week,
		lectionary: day.propers.lectionary,
		festivals: day.propers.festivals,
	});
	if (displayPropers.length === 0) return null;
	const propers = displayPropers[0];
	const m = findPropersByType(propers, [0, 19, 1, 2]);
	return {
		title: m[0]?.text ?? null,
		ot: m[19]?.text ?? null,
		epistle: m[1]?.text ?? null,
		gospel: m[2]?.text ?? null,
		color:
			findColor(...displayPropers, day.sunday?.propers?.lectionary) ?? null,
	};
}

function getFestivalTitle(day) {
	const m = findPropersByType(day.propers.festivals ?? [], [0]);
	return m[0]?.text ?? null;
}

function getDailyReadings(day) {
	const m = findPropersByType(day.propers.daily ?? [], [38, 39]);
	return { first: m[38]?.text ?? null, second: m[39]?.text ?? null };
}

function render(year, month) {
	const container = document.getElementById("lectionary-calendar");
	if (!container) return;

	const builder = new CalendarBuilder(year, month);
	const grid = builder.build(loader);

	const weekdays = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let html = `
    <div class="lectionary-calendar">
      <div class="lectionary-nav">
        <button id="lect-prev">&laquo; Prev</button>
        <h2>${getMonthLabel(year, month)}</h2>
        <button id="lect-next">Next &raquo;</button>
      </div>
      <div class="lectionary-table-wrap">
      <table class="lectionary-table">
        <colgroup>
          <col class="col-sunday">
          <col><col><col><col><col><col>
        </colgroup>
        <thead>
          <tr>${weekdays.map((d) => `<th>${d}</th>`).join("")}</tr>
        </thead>
        <tbody>
  `;

	for (const week of grid) {
		html += "<tr>";
		for (const day of week) {
			if (!day?.date) {
				html += `<td class="lect-empty"></td>`;
				continue;
			}

			const todayClass = isToday(day.date) ? " lect-today" : "";
			const isSunday = day.date.weekday === 7;
			const readings = isSunday ? getSundayReadings(day) : null;
			const festivalTitle = !isSunday ? getFestivalTitle(day) : null;
			const daily = !isSunday ? getDailyReadings(day) : null;
			const colorClass = readings?.color
				? ` lect-color-${readings.color.toLowerCase().replace(/\s+/g, "-")}`
				: "";

			const bgLink = (ref) =>
				`https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref)}&version=NKJV`;
			let cellContent = `<div class="lect-day-number${todayClass}">${day.date.day}</div>`;

			if (readings?.title) {
				cellContent += `<div class="lect-sunday-title">${readings.title}</div>`;
			}
			if (readings?.ot) {
				cellContent += `<div class="lect-reading"><span class="lect-reading-label">OT</span> <a class="lect-reading-link" href="${bgLink(readings.ot)}" target="_blank" rel="noopener">${readings.ot}</a></div>`;
			}
			if (readings?.epistle) {
				cellContent += `<div class="lect-reading"><span class="lect-reading-label">Ep</span> <a class="lect-reading-link" href="${bgLink(readings.epistle)}" target="_blank" rel="noopener">${readings.epistle}</a></div>`;
			}
			if (readings?.gospel) {
				cellContent += `<div class="lect-reading"><span class="lect-reading-label">Gsp</span> <a class="lect-reading-link" href="${bgLink(readings.gospel)}" target="_blank" rel="noopener">${readings.gospel}</a></div>`;
			}
			if (festivalTitle) {
				cellContent += `<div class="lect-festival">${festivalTitle}</div>`;
			}
			if (daily?.first) {
				cellContent += `<div class="lect-reading lect-daily"><span class="lect-reading-label">I</span> <a class="lect-reading-link" href="${bgLink(daily.first)}" target="_blank" rel="noopener">${daily.first}</a></div>`;
			}
			if (daily?.second) {
				cellContent += `<div class="lect-reading lect-daily"><span class="lect-reading-label">II</span> <a class="lect-reading-link" href="${bgLink(daily.second)}" target="_blank" rel="noopener">${daily.second}</a></div>`;
			}

			html += `<td class="lect-day${isSunday ? " lect-sunday" : ""}${colorClass}">${cellContent}</td>`;
		}
		html += "</tr>";
	}

	const colorKey = [
		{ cls: "violet", label: "Violet", desc: "Advent & Lent" },
		{
			cls: "white",
			label: "White",
			desc: "Christmas, Easter & feasts of our Lord",
		},
		{ cls: "green", label: "Green", desc: "Trinity season" },
		{ cls: "red", label: "Red", desc: "Pentecost, Apostles & Martyrs" },
		{ cls: "rose", label: "Rose", desc: "Gaudete & Laetare" },
		{ cls: "black", label: "Black", desc: "Good Friday" },
	];

	const readingAbbrevs = [
		{ abbr: "OT", meaning: "Old Testament" },
		{ abbr: "EP", meaning: "Epistle" },
		{ abbr: "GSP", meaning: "Gospel" },
	];

	html += `</tbody></table></div>
    <div class="lect-color-key">
      <h3 class="lect-color-key-heading">Calendar Key</h3>
      <div class="lect-key-section">
        <h4 class="lect-key-subheading">Reading Abbreviations</h4>
        <ul class="lect-color-key-list">
          ${readingAbbrevs
						.map(
							({ abbr, meaning }) => `
            <li class="lect-color-key-item">
              <span class="lect-color-key-label">${abbr}</span>
              <span class="lect-color-key-desc">— ${meaning}</span>
            </li>`,
						)
						.join("")}
        </ul>
      </div>
      <div class="lect-key-section">
        <h4 class="lect-key-subheading">Liturgical Colors</h4>
        <ul class="lect-color-key-list">
          ${colorKey
						.map(
							({ cls, label, desc }) => `
            <li class="lect-color-key-item">
              <span class="lect-color-swatch lect-swatch-${cls}"></span>
              <span class="lect-color-key-label">${label}</span>
              <span class="lect-color-key-desc">— ${desc}</span>
            </li>`,
						)
						.join("")}
        </ul>
      </div>
    </div>
  </div>`;
	container.innerHTML = html;

	document.getElementById("lect-prev").addEventListener("click", () => {
		if (currentMonth === 1) {
			currentMonth = 12;
			currentYear--;
		} else {
			currentMonth--;
		}
		render(currentYear, currentMonth);
	});
	document.getElementById("lect-next").addEventListener("click", () => {
		if (currentMonth === 12) {
			currentMonth = 1;
			currentYear++;
		} else {
			currentMonth++;
		}
		render(currentYear, currentMonth);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	render(currentYear, currentMonth);
});
