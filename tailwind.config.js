/** @format */

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: true,
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
};
