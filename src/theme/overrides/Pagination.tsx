import { alpha, Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Pagination(theme: Theme) {
  const grayPallete: any = theme.palette.grey;
  return {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            fontWeight: theme.typography.fontWeightBold,
          },
        },
        textPrimary: {
          "&.Mui-selected": {
            color: theme.palette.primary.main,
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            "&:hover, &.Mui-focusVisible": {
              backgroundColor: `${alpha(
                theme.palette.primary.main,
                0.24
              )} !important`,
            },
          },
        },
        outlined: {
          border: `1px solid ${grayPallete[500_32]}`,
        },
        outlinedPrimary: {
          "&.Mui-selected": {
            backgroundColor: alpha(theme.palette.primary.main, 0.08),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.24)}`,
          },
        },
      },
    },
  };
}
