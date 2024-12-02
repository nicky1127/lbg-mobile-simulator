/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "50%": { opacity: "1" },
          // "60%": { opacity: "0.8" },
          // "75%": { opacity: "0.5" },
          "100%": { opacity: "0.3" },
        },
        flash: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "rgb(96, 165, 250)" },
          // "0%, 100%": { borderColor: "rgb(96, 165, 250)" },
        },
        fadeInAi: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 4s ease-in-out",
        flashingBorder: "flash 1s infinite",
        fadeInAi: "fadeIn 0.3s ease",
      },
      colors: {
        defaultText: "#333",
        background: "var(--background)",
        foreground: "var(--foreground)",
        ltbGreen: "#006a4d",
        ltbGreen2: "#11b67a",
        ltbGreen3: "#10a870",
        darkGray: "#383838",
        lightGray: "#666",
        white: "#fff",
        bgColor: "rgb(241,241,241)",
        flashBorder: "rgb(96, 165, 250)",
      },
      width: {
        screenWidth: "405px",
      },
      height: {
        screenHeight: "800px",
      },
      fontFamily: {
        sans: ["Playfair Display", "serif"],
        serif: ["Lato", "sans-serif"],
      },
      lineHeight: {
        "extra-tight": "1",
      },
    },
  },
  plugins: [],
};
