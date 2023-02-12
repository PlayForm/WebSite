// @ts-nocheck
import { defineConfig } from "astro/config";

import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import rome from "astro-rome";
import critters from "astro-critters";

export default defineConfig({
	site: "https://playform.cloud",
	integrations: [
		sitemap(),
		critters({ logger: 1 }),
		prefetch(),
		rome({ logger: 1 }),
		compress({ logger: 1 }),
	],
});
