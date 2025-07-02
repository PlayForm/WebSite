import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./Public/**/*.html",
		"./Source/**/*.{astro,js,jsx,ts,tsx,vue,svelte}",
	],

	darkMode: "media",

	theme: {
		container: {
			center: true,
		},
		extend: {
			transitionTimingFunction: {
				Ease: "cubic-bezier(0.21, 0.1, 0.21, 1)",
			},
			fontFamily: {
				sans: ["Albert Sans", ...fontFamily.sans],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							"font-weight": "400",
						},
						li: {
							"&::marker": {
								color: theme("colors.red.200"),
							},
						},
						h1: {
							color: theme("colors.blue.200"),
						},
						h2: {
							color: theme("colors.blue.200"),
						},
						h3: {
							color: theme("colors.blue.200"),
						},
						h4: {
							color: theme("colors.blue.200"),
						},
						h5: {
							color: theme("colors.blue.200"),
						},
						h6: {
							color: theme("colors.blue.200"),
						},
					},
				},
			}),
			ringWidth: {
				5: "5px",
			},
		},
	},

	variants: {},

	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
};
