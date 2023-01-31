// ----------------------------------------------------------------------
import { Theme } from "@mui/material/styles";

export default function Paper(theme: Theme) {
  const grayPallete: any = theme.palette.grey;
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      variants: [
        {
          props: { variant: "outlined" },
          style: { borderColor: grayPallete[500_12] },
        },
      ],

      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  };
}
