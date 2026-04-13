/**
 * Wait! Before you edit this file!
 * This Eleventy-based project abstracts the traditional `.eleventy.js` file to help keep things clean and tidy.
 * Consider editing the following files instead:
 *  - `src/config/collections.js`
 *  - `src/config/passthroughs.js`
 *  - `src/config/plugins.js`
 *  - `src/config/shortcodes.js`
 *  - `src/config/watchtargets.js`
 *  - `src/config/templateLanguages.js`
 *  - `src/config/filters.js`
 *  - `src/config/transforms.js`
 */

// Node.js imports
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Local imports
import build from "./src/config/build.js";

/** ANSI color codes for styling terminal output without external dependencies */
const colors = {
	yellow: "\x1b[33m",
	gray: "\x1b[90m",
	white: "\x1b[97m",
	magenta: "\x1b[35m",
	reset: "\x1b[0m",
};

/** Registry of all Eleventy configuration modules with display metadata for the tree view */
const tasks = [
	{ icon: "📚", name: "Collections", path: "./src/config/collections.js" },
	{ icon: "🔌", name: "Plugins", path: "./src/config/plugins.js" },
	{ icon: "⏩", name: "Shortcodes", path: "./src/config/shortcodes.js" },
	{ icon: "🔍", name: "Filters ", path: "./src/config/filters.js" },
	{ icon: "🔀", name: "Transforms", path: "./src/config/transforms.js" },
	{ icon: "🚚", name: "Passthroughs", path: "./src/config/passthroughs.js" },
	{
		icon: "📜",
		name: "Template Languages",
		path: "./src/config/templateLanguages.js",
	},
	{ icon: "👀", name: "Watch Targets", path: "./src/config/watchtargets.js" },
];

/** Reads project name and author from package.json for display in the configuration tree */
const getProjectInfo = () => {
	try {
		const packageJson = JSON.parse(
			readFileSync(
				join(dirname(fileURLToPath(import.meta.url)), "package.json"),
				"utf8",
			),
		);
		return { name: packageJson.name, author: packageJson.author };
	} catch (error) {
		throw new Error(`Failed to read package.json: ${error.message}`);
	}
};

/** Displays a folder tree-style visualization showing which config modules loaded and their functions */
const displayConfigTree = (loadedTasks, siteName, author) => {
	console.log(
		`\n  🪐 ${colors.magenta}${siteName}${colors.reset}\n  ${colors.gray}by ${author}${colors.reset}\n  ${colors.gray}│${colors.reset}`,
	);
	const tasksWithChildren = loadedTasks.filter(
		(task) => Object.keys(task.config).length > 0,
	);
	for (const task of loadedTasks) {
		const taskNames = Object.keys(task.config);
		if (taskNames.length > 0) {
			const isLast =
				tasksWithChildren.indexOf(task) === tasksWithChildren.length - 1;
			const connector = isLast ? "└──" : "├──";
			console.log(
				`  ${colors.gray}${connector}${colors.reset} ${task.icon} ${colors.yellow}${task.name}${colors.reset} ${colors.gray}(${task.path.replace("./", "/")})${colors.reset}`,
			);
			taskNames.forEach((taskName, index) => {
				const itemConnector = index === taskNames.length - 1 ? "└──" : "├──";
				const prefix = isLast
					? "         "
					: `  ${colors.gray}│${colors.reset}      `;
				console.log(
					`${prefix}${colors.gray}${itemConnector} ●${colors.reset} ${colors.white}${taskName}${colors.reset}`,
				);
			});
			if (!isLast) console.log(`  ${colors.gray}│${colors.reset}`);
		}
	}
	console.log("");
};

/** Main Eleventy configuration function - dynamically loads and executes all config modules */
export default async function (eleventyConfig) {
	const { name: siteName, author } = getProjectInfo();
	const loadedTasks = await Promise.all(
		tasks.map(async (task) => ({
			...task,
			config: (await import(task.path)).default,
		})),
	);

	// Execute all task configurations
	for (const task of loadedTasks) {
		const taskNames = Object.keys(task.config);
		for (const taskName of taskNames) {
			await task.config[taskName](eleventyConfig);
		}
	}

	displayConfigTree(loadedTasks, siteName, author);
	build(eleventyConfig);
	eleventyConfig.setServerOptions({ showAllHosts: false });
	eleventyConfig.setQuietMode(true);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	return {
		pathPrefix: "/ascension-of-christ-lutheran-website/",
		dir: {
			input: "src",
			output: "public",
			includes: "assets/views",
			layouts: "assets/views/layouts",
			data: "data",
		},
		templateFormats: ["njk", "md", "11ty.js"],
	};
}
