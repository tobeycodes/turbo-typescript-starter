import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const config = defineConfig({
	plugins: [tsConfigPaths(), tanstackStart(), viteReact(), tailwindcss()],
	server: {
		port: 3000,
	},
});

export default config;
