// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";
export default function Dialog(theme: Theme) {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: {
          "&.MuiPaper-rounded": {},
          "&.MuiDialog-paperFullScreen": {},
          "&.MuiDialog-paper .MuiDialogActions-root": {},
          "@media (max-width: 600px)": {},
          "@media (max-width: 663.95px)": {
            "&.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody": {},
          },
        },
        paperFullWidth: {},
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {},
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {},
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          "& > :not(:first-of-type)": {},
        },
      },
    },
  };
}
