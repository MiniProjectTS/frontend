/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        PrimaryColor: '#C4DFFE', // Your custom color value
        MyYello :'#FFFFD1',  
        MyGreen : '#BDF4CF', 
        MyRed : '#FFC2C2'
      },
      width:{
        Photo : "30rem"
      },
      height:{
        Photo : "28rem"
      },
      fontFamily: {
       logo : ['Magra'],
       PrimaryFont : ['Manjari']
      },
      screens: {
        'custom-small': '480px',
        'custom-medium': '870px',
        'custom-large': '1000px',
        'custom-xlarge': '1280px',
      },
    },
  },
  plugins: [],
}

