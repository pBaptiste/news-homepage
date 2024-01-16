/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'almost-white' : '#FFFDFA',
				'dark-space-blue' : '#00001A',
				'gun-metal' : '#5E607A',
				'light-vermillion' : '#F15D51',
				'yellow' : '#E9AA52',
				'silver' : '#C5C6CE',
				
			},
			screens: {
				'desktop': '1124px',
			  },
		},
	},
	plugins: [],
}
