// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function Button(theme: Theme) {
  const grayPallete: any = theme.palette.grey;

  return {
    MuiButton: {
      styleOverrides: {
        root: {
          fontStyle: 'normal',
          fontFamily: 'Source Sans Pro',
          letterSpacing: '0px',
          textDecoration: 'none',
          textTransform: 'none',
          borderRadius: '4px',
          minWidth: 'inherit',
          "&:hover": {
          },
        },
        sizeLarge: {
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '26px',
        },
        sizeSmall: {
          fontSize: '13px',
          lineHeight: '22px',
          fontWeight: 600,
        },
        sizeMedium: {
          fontSize: '15px',
          lineHeight: '24px',
          fontWeight: 600,
        },
        defaultProps: "small",
        // contained
        containedInherit: {
          "&:hover": {
          },
        },
        containedPrimary: {
        },
        containedSecondary: {
        },
        containedInfo: {
        },
        containedSuccess: {
        },
        containedWarning: {
        },
        containedError: {
        },
        // outlined
        outlinedInherit: {
          "&:hover": {
          },
        },
        textInherit: {
          "&:hover": {
          },
        },
      },
    },
  };
}
