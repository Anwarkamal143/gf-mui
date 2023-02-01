// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function Button(theme: Theme) {
  const grayPallete: any = theme.palette.grey;

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          height: 48,
        },
        // contained
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows[8],
          "&:hover": {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows[1],
        },
        containedSecondary: {
          boxShadow: theme.customShadows[2],
        },
        containedInfo: {
          boxShadow: theme.customShadows[4],
        },
        containedSuccess: {
          boxShadow: theme.customShadows[1],
        },
        containedWarning: {
          boxShadow: theme.customShadows[1],
        },
        containedError: {
          boxShadow: theme.customShadows[1],
        },
        // outlined
        outlinedInherit: {
          border: `1px solid ${grayPallete[500_32]}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
