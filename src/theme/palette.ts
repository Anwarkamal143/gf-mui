import { createTheme, Palette } from "@mui/material/styles";
// import { darkPallete } from "./dark";
// import { lightPallete } from "./light";

// ----------------------------------------------------------------------
export const defualtTheme = (mode: "dark" | "light" = "dark") =>
  createTheme({
    // spacing: (factor: number) => `${0.25 * factor}rem`,
    palette: {
      mode,
    },
  });

// SETUP COLORS
const palette: Record<string, Palette> = {
  light: require("./light").lightPallete,

  dark: require("./dark").darkPallete,
};

export default palette;
