// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";

export default function Slider(theme: Theme) {
  const isLight = theme.palette.mode === "light";

  return {
    MuiSlider: {
      defaultProps: {},

      styleOverrides: {
        root: {
          "&.Mui-disabled": {},
        },
        markLabel: {},
        valueLabel: {},
      },
    },
  };
}
