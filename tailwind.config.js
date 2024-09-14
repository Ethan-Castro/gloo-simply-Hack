/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme
        light: {
          primary: '#121212',     // Near-black for light theme text
          secondary: '#6B7280',   // Medium gray for light theme secondary text
          accent: '#3B82F6',      // Blue for light theme accent
          background: '#FFFFFF',  // White for light theme background
          surface: '#F3F4F6',     // Light gray for light theme surface
        },
        // Dark theme
        dark: {
          primary: '#FFFFFF',     // White for dark theme text
          secondary: '#9CA3AF',   // Light gray for dark theme secondary text
          accent: '#8B5CF6',      // Purple for dark theme accent
          background: '#121212',  // Near-black for dark theme background
          surface: '#1E1E1E',     // Dark gray for dark theme surface
        },
        // Happy theme
        happy: {
          primary: '#1E90FF',     // Blue for happy theme text
          secondary: '#FFD700',   // Yellow for happy theme secondary text
          accent: '#FF69B4',      // Pink for happy theme accent
          background: '#FFD700',  // Yellow for happy theme background
          surface: '#FFF8DC',     // Light yellow for happy theme surface
        },
      },
    },
  },
  plugins: [require('daisyui')],
};