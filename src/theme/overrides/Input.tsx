// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";
export default function Input(theme: Theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            "& svg": {},
          },
        },
        input: {
          "&::placeholder": {},
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {},
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          "&:hover": {},
          "&.Mui-focused": {},
          "&.Mui-disabled": {},
        },
        underline: {
          "&:before": {},
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {},
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {},
          },
        },
      },
    },
  };
}
