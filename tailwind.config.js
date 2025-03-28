/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        strokeM: "#79859F",
        XanhMobifone: "#004390",
        XanhMobifoneBland: "#3F8CFF",
        White: "#fff",
        Background2: "#C3E2FF",
        Text: "#333",
        Text1: "#303030",
        Text2: "#4C5665",
        TextSubtext: "#696F8C",
        LabelSecondary: "rgba(60, 60, 67, 0.80)",
        Background3: "#F4F9FD",
        Green: "#24786D",
      },

      border: {
        normal: "1px solid #ccc",
      },

      boxShadow: {
        xanhMB: "0px 6px 12px 0px rgba(63, 140, 255, 0.26)",
        White: "0px 5px 14px 0px rgba(119, 123, 225, 0.25)",
        xanhBold: "1px 4px 4px 1px rgba(96, 122, 138, 0.26)",
        subjectLight: " 0px 1px 2px 0px rgba(184, 200, 224, 0.22)",
      },

      animation: {
        twinkle: "twinkle 2s infinite ease-in-out",
        spinSlow: "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
