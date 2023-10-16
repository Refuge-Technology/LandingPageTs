/** @type {import('tailwindcss').Config} */

export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-pattern": "url('/src/assets/images/decentralized.png')",
				"hero-pattern2": "url('/src/assets/svg/un-icon.svg')",
			},
			fontFamily: {
				sans: ["Montserrat", "sans-serif"],
			},
			colors: {
				primary: "#DCDCDC",
				secondary: "#BC13FE",
				background: "#031623",
				links: "#81869C",
			},
		},
	},
	plugins: [],
};
