// @ts-nocheck
/*
 * Some PostCSS plugins ship as ES modules, so `require()` hands back the module
 * namespace object instead of the plugin factory. Unwrap `.default` when the
 * loaded value is not callable, so a plugin upgrading to ESM cannot take the
 * whole stylesheet build down.
 */
const Plugin = (Name) => {
	const Loaded = require(Name);

	if (typeof Loaded === "function") return Loaded;

	if (Loaded && typeof Loaded.default === "function") return Loaded.default;

	throw new TypeError(
		`PostCSS plugin "${Name}" does not export a callable factory`,
	);
};

module.exports = {
	plugins: [
		Plugin("postcss-import"),
		Plugin("postcss-url"),
		Plugin("tailwindcss/nesting"),
		Plugin("tailwindcss")("./tailwind.config.js"),
		Plugin("postcss-combine-media-query"),
		Plugin("postcss-combine-duplicated-selectors")({
			removeDuplicatedProperties: true,
			removeDuplicatedValues: false,
		}),
		Plugin("autoprefixer"),
		Plugin("cssnano")({ preset: "advanced" }),
		Plugin("postcss-reporter"),
	],
};
