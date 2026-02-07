import { defineConfig } from "vitest/config";

const config = defineConfig({
	test: {
		coverage: {
			enabled: true,
			provider: "v8",
		},
		passWithNoTests: true,
		projects: ["apps/*", "packages/*"],
	},
});

export default config;
