import PreFetch from "@astrojs/prefetch";
import SiteMap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import Worker from "astrojs-service-worker";

export default defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
	site: "https://playform.cloud",
	experimental: {
		assets: true,
		viewTransitions: true,
	},
	compressHTML: true,
	integrations: [
		import.meta.env.MODE === "production" ? Worker() : null,
		SiteMap(),
		// Critters({ Logger: 1 }),
		PreFetch(),
		// Rome({ Logger: 1 }),
		// Compress({ Logger: 1 }),
	],
	vite: {
		build: {
			sourcemap: true,
		},
	},
});
