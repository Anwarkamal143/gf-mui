import { Palette } from "@mui/material/styles";
import { darkPallete } from "./dark";
import { lightPallete } from "./light";

// ----------------------------------------------------------------------

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const palette: Record<string, Palette> = {
  light: lightPallete,

  dark: darkPallete,
};

export default palette;
