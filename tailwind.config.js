/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx, ts, tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1f2937",

          "secondary": "#blueviolet",

          "accent": "#111827",

          "neutral": "#6d28d9",

          "base-100": "#f2ffff",

          "info": "#00b6fa",

          "success": "#00f7ac",

          "warning": "#e84b00",

          "error": "#db1834",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

