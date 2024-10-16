/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'openSans': "'Open Sans'"
      },
      colors: {
        onPrimary : "#1A5319",
        onSecondary : "#508D4E"
      }
    },
  },
  plugins: [],
});

