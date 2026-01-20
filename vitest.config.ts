import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		coverage: {
			enabled: true,
			provider: "v8",
		},
		passWithNoTests: true,
		projects: ["apps/*", "packages/*"],
	},
});
