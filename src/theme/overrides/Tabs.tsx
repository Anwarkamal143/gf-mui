// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";

export default function Tabs(theme: Theme) {
  return {
    MuiTabs: {
      styleOverrides: {
        scrollButtons: {},
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {},
          "&:not(:last-of-type)": {},
          "@media (min-width: 600px)": {},
        },
        labelIcon: {
          "& > *:first-of-type": {},
        },
        wrapped: {},
        textColorInherit: {},
      },
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {},
      },
    },
  };
}
