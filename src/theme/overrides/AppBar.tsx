import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function AppBar(theme: Theme) {
  const themeP = theme.palette;
  return {
    MuiAppBar: {
      defaultProps: {},

      styleOverrides: {
        root: {
          background: themeP.primary.main,
          color: themeP.common.white,
          boxShadow: "none",
        },
        message: {
          "& .MuiAlertTitle-root": {
            // ...theme.components?.MuiAlertTitle
          },
        },
        action: {
          "& button:not(:first-of-type)": {},
        },
      },
    },
  };
}
