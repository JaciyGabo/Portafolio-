/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Electric blue / tech tones
        electric: {
          50: '#e6f2ff',
          100: '#b3daff',
          200: '#80c2ff',
          300: '#4daaff',
          400: '#1a91ff',
          500: '#0077e6',
          600: '#005bb3',
          700: '#004080',
          800: '#00264d',
          900: '#000b1a',
        },
        // Purple tech tones
        tech: {
          50: '#f3e8ff',
          100: '#ddc6ff',
          200: '#c7a3ff',
          300: '#b180ff',
          400: '#9b5dff',
          500: '#853aff',
          600: '#6a2dd4',
          700: '#5020a3',
          800: '#351372',
          900: '#1b0641',
        },
        // Dark base with blue/purple undertone
        dark: {
          950: '#0a0a0f',
          900: '#0d0d14',
          800: '#12121c',
          700: '#1a1a28',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        // Pixel art geometric patterns
        'pixel-grid': `
          linear-gradient(to right, rgba(0, 119, 230, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 119, 230, 0.03) 1px, transparent 1px)
        `,
        'geometric-pattern': `
          radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(0, 119, 230, 0.08) 0%, transparent 50%)
        `,
      },
      backgroundSize: {
        'pixel': '20px 20px',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};