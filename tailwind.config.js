/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "c-blue": "#092A59",
        "c-blue-dark": "#061E40",
        "c-red": "#A22531",
        "c-red-pale": "#A2253121",
        "c-red-glassy": "#A22531E8",
        "c-black": "#000000",
        "c-white": "#ffffff",
        "c-gray": "#7D7C7C",
        "line-gray": "#D9D9D9",
        "bg-blue": "#092A5914",
      },
      fontSize: {
        11: "11px",
        13: "13px",
        15: "15px",
        md: "17px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};
