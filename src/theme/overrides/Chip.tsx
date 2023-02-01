import { Theme } from "@mui/material/styles";
import { CloseIcon } from "./CustomIcons";

// ----------------------------------------------------------------------

export default function Chip(theme: Theme) {
  // theme.palette.grey.
  const pallete: any = theme.palette.grey;
  return {
    MuiChip: {
      defaultProps: {
        deleteIcon: <CloseIcon />,
      },

      styleOverrides: {
        colorDefault: {
          "& .MuiChip-avatarMedium, .MuiChip-avatarSmall": {
          },
        },
        outlined: {
          "&.MuiChip-colorPrimary": {
          },
          "&.MuiChip-colorSecondary": {
          },
        },
        //
        avatarColorInfo: {
        },
        avatarColorSuccess: {
        },
        avatarColorWarning: {
        },
        avatarColorError: {
        },
      },
    },
  };
}
