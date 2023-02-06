/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				grass: '#9BCC50',
				poison: '#B97FC9',
				fire: '#FC7C23',
				water: '#4592C4',
				flying: '#30A7D7',
				bug: '#729F3F',
			},
		},
	},
	plugins: [],
});
