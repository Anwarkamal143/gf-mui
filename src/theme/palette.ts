import { createTheme, Palette } from "@mui/material/styles";
// import { darkPallete } from "./dark";
// import { lightPallete } from "./light";

// ----------------------------------------------------------------------
export const defualtTheme = createTheme({
  spacing: (factor: number) => `${0.25 * factor}rem`,
});
function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const palette: Record<string, Palette> = {
  light: require("./light").lightPallete,

  dark: require("./dark").darkPallete,
};

export default palette;
