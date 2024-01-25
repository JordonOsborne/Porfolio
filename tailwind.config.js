/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: ['class', '[data-mode="dark"]'],
	theme: {
		screens: {
			xs: '320px',
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: {
				DEFAULT: '#367CFF',
				900: '#1B3E7F',
				800: '#2556B2',
				700: '#86B0FF',
				600: '#AECAFF',
				500: '#D6E4FF',
			},
			secondary: {
				DEFAULT: '#EA394A',
				900: '#A32733',
				800: '#D23342',
				700: '#EC4C5C',
				600: '#F07480',
				500: '#F8C3C8',
			},
			info: '#2556B2',
			success: '#2F9524',
			warning: '	#FFCC33',
			error: '#95242F',
			disabled: '#D8D8D8',
			disabledBtn: '#AECAFF',
			dark: '#0C0C0C',
			light: '#FCFCFC',
			neutral: {
				900: '#3C3C3C',
				800: '#6D6D6D',
				700: '#9D9D9D',
				600: '#CECECE',
			},
			gradient: '#0A1A3A',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				mono: ['"Roboto Mono"', ...defaultTheme.fontFamily.mono],
			},
			fontSize: {
				xxl: ['6rem', { lineHeight: '6.5rem' }],
				xl: ['1.5rem', { lineHeight: '2rem' }],
				lg: ['1.25rem', { lineHeight: '1.75rem' }],
			},
			maxHeight: {
				modal: '80vh',
			},
			padding: {
				gutter: '30px',
			},
		},
	},
	plugins: [],
}
