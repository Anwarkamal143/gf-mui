// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function Autocomplete(theme: Theme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {},
        listbox: {
          "& .MuiAutocomplete-option": {},
        },
      },
      
      MuiChip: {
        defaultProps: {
          size: "small"
        },
      },
    },
  };
}
