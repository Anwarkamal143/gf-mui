import { Theme } from "@mui/material/styles";
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "./CustomIcons";

// ----------------------------------------------------------------------

export default function Alert(theme: Theme) {
  const isLight = theme.palette.mode === "light";
  const standardStyle = (color: PaletteColorKeys) => ({
    color: theme.palette[color][isLight ? "darker" : "lighter"],
    backgroundColor: theme.palette[color][isLight ? "lighter" : "darker"],
    "& .MuiAlert-icon": {
      color: theme.palette[color][isLight ? "main" : "light"],
    },
  });

  const filledStyle = (color: PaletteColorKeys) => ({
    color: theme.palette[color].contrastText,
  });

  const outlinedStyle = (color: PaletteColorKeys) => ({
    "& .MuiAlert-icon": {
    },
  });

  return {
    MuiAlert: {
      defaultProps: {
        iconMapping: {
          info: <InfoIcon />,
          success: <SuccessIcon />,
          warning: <WarningIcon />,
          error: <ErrorIcon />,
        },
      },

      styleOverrides: {
        message: {
          "& .MuiAlertTitle-root": {
          },
        },
        action: {
          "& button:not(:first-of-type)": {
          },
        },

        standardInfo: standardStyle("info"),
        standardSuccess: standardStyle("success"),
        standardWarning: standardStyle("warning"),
        standardError: standardStyle("error"),

        filledInfo: filledStyle("info"),
        filledSuccess: filledStyle("success"),
        filledWarning: filledStyle("warning"),
        filledError: filledStyle("error"),

        outlinedInfo: outlinedStyle("info"),
        outlinedSuccess: outlinedStyle("success"),
        outlinedWarning: outlinedStyle("warning"),
        outlinedError: outlinedStyle("error"),
      },
    },
  };
}
