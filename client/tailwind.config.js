/** @type {import('tailwindcss').Config} */
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-color' : "#e7e7e7e0",
        'background-gray':"#F4F4F5",
        'input-gray-bg' :"#f4f4f4",
      },
      fontFamily: {
        body: ['Quicksand', 'sans-serif'],
        'Wind':['Wind'],
        'Ginerin': ['Ginerin'],
        'Comic': ['Comic'],
      },

      boxShadow:{
        '3xl':'white 0px 0px 3px 0px;' ,
      },

      width:{
        'sideBar-width':'3rem'
      },
      backgroundColor:{
        logoBackground:'#423538',
      },

      height:{
          ContainersHeight : 'calc(100%-3rem)',
      },

      transitionProperty: {
        'height': 'height'
      },
      
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },

      keyframes: {
        arrow: {
          '0%': { opacity: 0 },
          '40%': { opacity: 1},
          '80%': { opacity: 0},
          '100%': { opacity: 0},
        }
      },
      animation: {
        'arrow': 'arrow 3s linear infinite',
      },
      
      gridTemplateColumns: {
      
        'projects': 'repeat(auto-fit, minmax(270px, 1fr))',
        'services': 'repeat(auto-fit, minmax(300px, 1fr))',

      }

    },
  },

  plugins: [],
}

