/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx, ts, tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1f2937",

          "secondary": "fff",

          "accent": "#111827",

          "neutral": "#6d28d9",

          "base-100": "#f2ffff",

          "info": "#3b82f6",

          "success": "#22c55e",

          "warning": "#e84b00",

          "error": "#db1834",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

