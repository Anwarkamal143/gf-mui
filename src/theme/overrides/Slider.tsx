// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";

export default function Slider(theme: Theme) {
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
