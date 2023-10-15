/** @type {import('tailwindcss').Config} */

export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Montserrat", "sans-serif"],
			},
			colors: {
				primary: "#DCDCDC",
				secondary: "#65DC99",
				background: "#031623",
				links: "#81869C",
			},
		},
	},
	plugins: [],
};
