/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'serif': ['Merriweather', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        'mono': ['Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],

        'rounded': ['Arial Rounded MT Bold', 'Helvetica Rounded', 'Nunito', 'Quicksand', 'Poppins', 'sans-serif'],

        'display': ['Playfair Display', 'Cinzel', 'Cormorant Garamond', 'serif'],
        'modern': ['Montserrat', 'Raleway', 'Lato', 'Open Sans', 'sans-serif'],

        'handwriting': ['Pacifico', 'Dancing Script', 'Great Vibes', 'cursive'],

        'tech': ['Orbitron', 'Exo 2', 'Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}