import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Pagination(theme: Theme) {
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {},
        },
        textPrimary: {
          "&.Mui-selected": {
            "&:hover, &.Mui-focusVisible": {},
          },
        },
        outlined: {},
        outlinedPrimary: {
          "&.Mui-selected": {},
        },
      },
    },
  };
}
