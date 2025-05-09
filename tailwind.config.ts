
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// QCSP Custom colors based on brand guidelines
				qcsp: {
					// Primary Blues
					primary: '#1050CE',
					'primary-dark': '#0F3F9E',
					'primary-darker': '#14377C',
					'primary-darkest': '#112C5F',
					'primary-deep': '#0D1D3C',
					
					// Secondary Yellows
					secondary: '#84825E', 
					'secondary-light': '#ACA843',
					'secondary-lighter': '#CBC316',
					'secondary-lightest': '#DED400',
					'secondary-bright': '#E5DB00',
					
					// Tertiary Reds
					tertiary: '#FFD3CF',  // Lightest red
					'tertiary-dark': '#FF9B93',
					'tertiary-darker': '#FF3727',
					'tertiary-darkest': '#FF1300',
					'tertiary-deep': '#E91100',
					
					// Specific color codes from the brand guide
					blue: {
						'1050CE': '#1050CE',
						'0F3F9E': '#0F3F9E',
						'14377C': '#14377C',
						'112C5F': '#112C5F',
						'0D1D3C': '#0D1D3C',
					},
					yellow: {
						'84825E': '#84825E',
						'ACA843': '#ACA843',
						'CBC316': '#CBC316',
						'DED400': '#DED400',
						'E5DB00': '#E5DB00',
					},
					red: {
						'FFD3CF': '#FFD3CF',
						'FF9B93': '#FF9B93',
						'FF3727': '#FF3727',
						'FF1300': '#FF1300',
						'E91100': '#E91100',
					},
				},
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				libreCaslon: ['"Libre Caslon Text"', 'serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-light': {
					'0%, 100%': { opacity: '0.5' },
					'50%': { opacity: '0.9' }
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'grid-flash': {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '0.8' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 5s ease-in-out infinite',
				'pulse-light': 'pulse-light 3s ease-in-out infinite',
				'rotate-slow': 'rotate-slow 15s linear infinite',
				'grid-flash': 'grid-flash 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
