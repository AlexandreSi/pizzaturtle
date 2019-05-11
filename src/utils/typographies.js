import Typography from "typography"

export const typographyIndex = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Stylish",
    "sans-serif",
  ],
  bodyFontFamily: ["Georgia", "serif"],
  googleFonts: [
    {
      name: "Stylish",
      styles: [
        "400",
      ],
    },
  ],
})

export const typographyPage2 = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "monospace",
    "sans-serif",
  ],
  bodyFontFamily: ["monospace", "serif"],
})
