/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the src directory
    "./public/index.html",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        custom: ['MyCustomFont', 'serif'],
      },
    },
  },
  plugins: [
    
  
  ],
}

