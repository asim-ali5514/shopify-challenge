module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : 'class',
  mode : 'jit',
  theme: {
    extend: {
      fontFamily : {
        'Space-Mono' : ['"Space Mono"' , 'monospace'],
      }
    },
  },
  plugins: [],
}
