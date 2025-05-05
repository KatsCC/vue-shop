/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // JIT 모드 활성화
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx,vue}"], // Vue 파일 포함
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1025px",
      xl: "1280px",
      xl2: "1360px",
    },
    extend: {
      lineClamp: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["light", "dark"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
