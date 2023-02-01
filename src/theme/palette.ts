import { createTheme, Palette } from "@mui/material/styles";
import { darkPallete } from "./dark";

// ----------------------------------------------------------------------
export const defualtTheme = createTheme({
  spacing: (factor: number) => `${0.25 * factor}rem`,
});
function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const palette: Record<string, Palette> = {
  light: darkPallete,

  dark: darkPallete,
};

export default palette;
