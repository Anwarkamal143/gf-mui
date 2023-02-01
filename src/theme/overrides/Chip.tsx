import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Chip(theme: Theme) {
  // theme.palette.grey.
  return {
    MuiChip: {
      defaultProps: {},

      styleOverrides: {
        colorDefault: {
          "& .MuiChip-avatarMedium, .MuiChip-avatarSmall": {},
        },
        outlined: {
          "&.MuiChip-colorPrimary": {},
          "&.MuiChip-colorSecondary": {},
        },
        //
        avatarColorInfo: {},
        avatarColorSuccess: {},
        avatarColorWarning: {},
        avatarColorError: {},
      },
    },
  };
}
