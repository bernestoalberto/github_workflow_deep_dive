import js from "@eslint/js";

export default [
	js.configs.recommended,
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
			globals: {
				// Browser globals
				window: "readonly",
				document: "readonly",
				console: "readonly",
				setTimeout: "readonly",
				setInterval: "readonly",
				clearTimeout: "readonly",
				clearInterval: "readonly",
				fetch: "readonly",
				localStorage: "readonly",
				sessionStorage: "readonly",

				// Testing globals
				describe: "readonly",
				it: "readonly",
				test: "readonly",
				expect: "readonly",
				beforeEach: "readonly",
				afterEach: "readonly",
				beforeAll: "readonly",
				afterAll: "readonly",
				jest: "readonly",
				vi: "readonly",

				// React globals
				React: "readonly",
				JSX: "readonly",

				// Node.js globals
				process: "readonly",
				Buffer: "readonly",
				__dirname: "readonly",
				__filename: "readonly",
				module: "readonly",
				require: "readonly",
				exports: "readonly",
				global: "readonly",
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
			// Development-friendly rules
			indent: ["error", 2],
			quotes: ["error", "single"],
			semi: ["error", "always"],
			"no-unused-vars": "off", // Disabled for development
			"no-console": "warn",
			"no-debugger": "warn",
			"no-undef": "error",
		},
	},
];
