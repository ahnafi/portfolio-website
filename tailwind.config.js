/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   primary: 'Vina Sans',
    //   secondary: 'Rajdhani',
    //   tertiary: 'Aldrich',
    // },
    container: {
      center : 'true',
      padding: '16px'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      '2xl': '1320px'
    },
    extend: {
      colors: {
        light : '#f6f1f1',
        // primary : '#19a7ce',
        secondary: '#146c94',
        dark : '#000',
        pages : "#4E6E81",
        
        // light : '#00dfff',
        primary : '#B0DAFF',
        // secondary: '#dbdfea',
        // dark : '#3c978a',
        facebook: '#1877F2',
        youtube: '#FF0000',
        instagram: '#E4405F'
      },
      // backgroundImage: {
      //   site: "url('./assets/site-bg.jpg')",
      //   about: "url('./assets/about.png')",
      //   services: "url('./assets/services.png')",
      // },
    },
  },
  plugins: [],
};