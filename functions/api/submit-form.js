export async function onRequestPost(context) {
	const { request, env } = context;

	let formData;
	try {
		formData = await request.formData();
	} catch {
		return Response.json({ error: "Invalid form data" }, { status: 400 });
	}

	const formType = formData.get("form_type");
	const get = (key) => formData.get(key) || "";

	let subject, html, replyTo;

	switch (formType) {
		case "withdrawal": {
			const firstName = get("first_name");
			const lastName = get("last_name");
			replyTo = get("contact_email");
			subject = `Child Care Withdrawal Form — ${firstName} ${lastName}`;
			html = buildTable("Withdrawal Form", [
				["Child's First Name", firstName],
				["Child's Last Name", lastName],
				["Contact Email", replyTo],
				["Classroom(s)", formData.getAll("classrooms").join(", ")],
				["Type of Withdrawal", get("withdrawal_type")],
				["Last Day of Care", get("last_day")],
				["Return Date", get("return_date") || "N/A"],
				["Comments / Reason", get("comments")],
				["Agreement Acknowledged", "Yes"],
			]);
			break;
		}
		case "schedule-change": {
			const childName = `${get("child_first_name")} ${get("child_last_name")}`;
			replyTo = get("contact_email");
			subject = `Schedule Change Request — ${childName}`;
			html = buildTable("Schedule Change Request", [
				["Child's Name", childName],
				["Contact Email", replyTo],
				["Classroom(s)", formData.getAll("classrooms").join(", ")],
				["Current Schedule", formData.getAll("current_schedule").join(", ")],
				["New Schedule", formData.getAll("new_schedule").join(", ")],
				["Type of Change", get("change_type")],
				["Comments", get("comments")],
			]);
			break;
		}
		case "vacation-request": {
			const firstName = get("first_name");
			const lastName = get("last_name");
			subject = `Vacation/Holiday Request — ${firstName} ${lastName}`;
			html = buildTable("Vacation/Holiday Request", [
				["Child's First Name", firstName],
				["Child's Last Name", lastName],
				["Vacation Credit Request", get("vacation_credit")],
				["Vacation Credit Comments", get("vacation_comments") || "N/A"],
				["Use Vacation Day for Holiday", get("holiday_credit")],
				["Holiday Credit Comments", get("holiday_comments") || "N/A"],
			]);
			break;
		}
		case "contact": {
			const firstName = get("first_name");
			const lastName = get("last_name");
			replyTo = get("email");
			subject = `Contact Form — ${firstName} ${lastName}`;
			html = buildTable("Contact Us", [
				["First Name", firstName],
				["Last Name", lastName],
				["Email", replyTo],
				["Message", get("message")],
			]);
			break;
		}
		default:
			return Response.json({ error: "Unknown form type" }, { status: 400 });
	}

	// Requires RESEND_API_KEY set as a Cloudflare Pages environment variable.
	// The "from" domain (ascensionofchrist.org) must be verified in the Resend dashboard.
	const emailPayload = {
		from: "Ascension of Christ Lutheran <noreply@ascensionofchrist.org>",
		to: ["info@ascensionofchrist.org"],
		subject,
		html,
	};
	if (replyTo) emailPayload.reply_to = replyTo;

	const resendRes = await fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${env.RESEND_API_KEY}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(emailPayload),
	});

	if (!resendRes.ok) {
		console.error("Resend error:", await resendRes.text());
		return Response.json({ error: "Failed to send email" }, { status: 500 });
	}

	return Response.json({ success: true });
}

function buildTable(title, rows) {
	const rowsHtml = rows
		.map(
			([label, value]) => `
      <tr>
        <td style="padding:8px 16px;font-weight:bold;background:#f0f0f0;white-space:nowrap;border:1px solid #ddd;vertical-align:top">${label}</td>
        <td style="padding:8px 16px;border:1px solid #ddd;vertical-align:top">${String(value).replace(/\n/g, "<br>")}</td>
      </tr>`
		)
		.join("");
	return `
    <h2 style="font-family:sans-serif;color:#333">${title}</h2>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;color:#333">
      ${rowsHtml}
    </table>`;
}
