import { Theme } from "@mui/material/styles";


// ----------------------------------------------------------------------

export default function DatePicker(theme: Theme) {

  return {
    MuiDatePicker: {
      defaultProps: {
        iconMapping: {},
      },

      styleOverrides: {
        root: {
          background: "red",
        },

        ".MuiCalendarPicker-root ": {
          background: "red",
        },

        "& .MuiCalendarPicker-root ": {
          background: "red",
        },
      },
    },
  };
}
