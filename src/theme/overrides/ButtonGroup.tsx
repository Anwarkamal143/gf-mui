// ----------------------------------------------------------------------

import { Theme } from "@mui/material/styles";

export default function ButtonGroup(theme: Theme) {
  const styleContained = (color: PaletteColorKeys) => ({
    props: { variant: "contained", color },
  });

  return {
    MuiButtonGroup: {
      variants: [
        {
          props: { variant: "contained", color: "inherit" },
        },
        styleContained("primary"),
        styleContained("secondary"),
        styleContained("info"),
        styleContained("success"),
        styleContained("warning"),
        styleContained("error"),

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
