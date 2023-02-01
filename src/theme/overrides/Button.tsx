// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function Button(theme: Theme) {
  const grayPallete: any = theme.palette.grey;

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {},
        },
        sizeLarge: {},
        // contained
        containedInherit: {
          "&:hover": {},
        },
        containedPrimary: {},
        containedSecondary: {},
        containedInfo: {},
        containedSuccess: {},
        containedWarning: {},
        containedError: {},
        // outlined
        outlinedInherit: {
          "&:hover": {},
        },
        textInherit: {
          "&:hover": {},
        },
      },
    },
  };
}
