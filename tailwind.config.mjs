/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
],
	theme: {
		extend: {
			fontFamily: {
				index: ['Josefin Sans', 'sans-serif'],
			  },
			  screens: {
				'tlmc': '320px',
				// => @media (min-width: 300px) { ... }
		
				'tlc': '375px',
				// => @media (min-width: 375px) { ... }
		  
				'tlg': '428px',
				// => @media (min-width: 464px) { ... }
			  },
		},
	},
	plugins: [],
}
