/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['milkyway', 'sans-serif'], // 사용자 정의 폰트 추가
      },
      colors: {
        'my-color': '#6178FA',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}

