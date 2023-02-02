// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function ButtonGroup(theme: Theme) {

  return {
    MuiButtonGroup: {
      variants: [
        {
          
        },
        {
          props: { disabled: true },
          style: {
            "& .MuiButtonGroup-grouped.Mui-disabled": {
              "&.MuiButton-contained": {
              },
            },
          },
        },
      ],

      styleOverrides: {
        root: {
          "&:hover": {
          },
        },
      },
    },
  };
}
