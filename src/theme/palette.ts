import { createTheme, Palette } from "@mui/material/styles";
// import { darkPallete } from "./dark";
// import { lightPallete } from "./light";

// ----------------------------------------------------------------------
export const defualtTheme = createTheme({
  // spacing: (factor: number) => `${0.25 * factor}rem`,
});

// SETUP COLORS
const palette: Record<string, Palette> = {
  light: require("./light").lightPallete,

  dark: require("./dark").darkPallete,
};

export default palette;
