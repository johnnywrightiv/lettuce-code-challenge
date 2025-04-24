import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				blue: '#2F3B44',
				teal: '#98C4BA',
				maroon: '#751A2B',
				light: '#EAEAEA',
				dark: '#3B3B3C',
			},
		},
	},
};

export default config;
