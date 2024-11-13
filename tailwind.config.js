/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"], // Tüm bileşen dosyalarının yollarını burada belirtin
  presets: [require("nativewind/preset")],  // Nativewind ile Tailwind çalışmasını sağlar
  theme: {
    extend: {},
  },
  plugins: [],
};
