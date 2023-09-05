/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#082032",
        
"secondary": "#ffffff",
        
"accent": "#ffffff",
        
"neutral": "#ffffff",
        
"base-100": "#ffffff",
        
"info": "#ffffff",
        
"success": "#ffffff",
        
"warning": "#ffffff",
        
"error": "#ffffff",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

}
