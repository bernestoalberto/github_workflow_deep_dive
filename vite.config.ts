import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		// Enable Jest-like globals (expect, describe, it, etc.)
		globals: true,
		// Use jsdom environment for React component testing
		environment: "jsdom",
		// Setup file for jest-dom matchers
		setupFiles: ["./src/test/setup.ts"],
	},
});
