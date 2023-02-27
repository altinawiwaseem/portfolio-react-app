/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "550px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "poppins-light": ["Poppins Light", "sans-serif"],
        "poppins-thin": ["Poppins Thin", "sans-serif"],
        "poppins-regular": ["Poppins Regular", "sans-serif"],
        "poppins-medium": ["Poppins Medium", "sans-serif"],
        "poppins-semibold": ["Poppins SemiBold", "sans-serif"],
        "poppins-bold": ["Poppins Bold", "sans-serif"],
        "poppins-extrabold": ["Poppins ExtraBold", "sans-serif"],
      },
      colors: {
        "light-blue": " #04c3ff",
        "light-blue-shadow": "rgb(69 211 255 / 27%)",
        "sea-green": " #0abead",
        "sea-green-dark": "#0cbfae",
        "sea-green-extra-dark": "#09bead",
        "sea-green-shadow": " rgba(11, 190, 173, 0.4)",
        "header-hamburger-background": "rgba(11, 190, 173, 0.8)",
        orange: "#f57f17",
        "dark-orange": "#ff5823",
        "orange-shadow": "rgba(245, 127, 23, 0.2)",
        white: " #ffffff",
        black: " #333333",
        "disabled-btn": "#09bead7a",
        "error-message": "#e44f4fd1",
        "toast-error": "#e44f4ffa",
        "toast-shadow": "#9c9c9ce3",
        "toast-success": "#0cbfae",
        "loader-color": "#0cbfae",
        "primary-color": "#1f2235",
      },
    },
  },
  plugins: [],
};
