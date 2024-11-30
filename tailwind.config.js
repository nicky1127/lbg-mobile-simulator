/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultText: "#333333",
        background: "var(--background)",
        foreground: "var(--foreground)",
        ltbGreen: "#006a4d",
        ltbGreen2: "#11b67a",
        ltbGreen3: "#10a870",
        darkGray: "#383838",
        lightGray: "#666",
        white: "#fff",
      },
      width: {
        screenWidth: "405px",
      },
      height: {
        screenHeight: "812px",
      },
    },
  },
  plugins: [],
};
