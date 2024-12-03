/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderWidth: {
				1: '1px',
			},
			colors: {
				chromeWhite: '#e7eed8',
				orangeRed: '#ff4100'
			},
		},
		fontFamily: {
			sans: ['Avenir Next', 'Avenir', 'Helvetica', 'sans-serif'],
			mono: ['Courier Prime', 'Courier New', 'Courier', 'monospace']
		}
	},
	plugins: [],
}
