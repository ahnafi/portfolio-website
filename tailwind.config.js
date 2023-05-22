/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // fontFamily: {
    //   // primary: 'Poppins',
    //   // secondary: 'Rajdhani',
    //   // tertiary: 'Aldrich',
    //   'sans': ["ui-sans-serif", "system-ui"," -apple-system"," BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
    //   'serif': ['ui-serif', 'Georgia' ],
    //   'mono': ['ui-monospace', 'SFMono-Regular'],
    // },
    container: {
      center: "true",
      padding: "16px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
      "2xl": "1320px",
    },
    extend: {
      colors: {
        light: "#f6f1f1",
        secondary: "#146c94",
        dark: "#000",
        pages: "#4E6E81",
        primary: "#B0DAFF",
        facebook: "#1877F2",
        youtube: "#FF0000",
        instagram: "#E4405F",
      },
    },
  },
  plugins: [],
};
