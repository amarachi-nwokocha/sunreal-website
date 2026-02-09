// app/fonts.ts
import localFont from "next/font/local";

export const josefinSans = localFont({
  src: [
    { path: "../public/fonts/josefin/JosefinSans-Thin.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/josefin/JosefinSans-ThinItalic.ttf", weight: "100", style: "italic" },

    { path: "../public/fonts/josefin/JosefinSans-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/josefin/JosefinSans-ExtraLightItalic.ttf", weight: "200", style: "italic" },

    { path: "../public/fonts/josefin/JosefinSans-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/josefin/JosefinSans-LightItalic.ttf", weight: "300", style: "italic" },

    { path: "../public/fonts/josefin/JosefinSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/josefin/JosefinSans-Italic.ttf", weight: "400", style: "italic" },

    { path: "../public/fonts/josefin/JosefinSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/josefin/JosefinSans-MediumItalic.ttf", weight: "500", style: "italic" },

    { path: "../public/fonts/josefin/JosefinSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/fonts/josefin/JosefinSans-SemiBoldItalic.ttf", weight: "600", style: "italic" },

    { path: "../public/fonts/josefin/JosefinSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/josefin/JosefinSans-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  display: "swap",
});
export const brittany = localFont({
  src: [
    {
      path: "../public/fonts/brittany/BrittanySignature.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});
