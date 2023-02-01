import { Theme } from "@mui/material/styles";
import {
  CheckboxCheckedIcon,
  CheckboxIcon,
  CheckboxIndeterminateIcon,
} from "./CustomIcons";

// ----------------------------------------------------------------------

export default function Checkbox(theme: Theme) {
  return {
    MuiCheckbox: {
      defaultProps: {
        icon: <CheckboxIcon />,
        checkedIcon: <CheckboxCheckedIcon />,
        indeterminateIcon: <CheckboxIndeterminateIcon />,
      },

      styleOverrides: {
        root: {
          "&.Mui-checked.Mui-disabled, &.Mui-disabled": {
          },
          "& .MuiSvgIcon-fontSizeMedium": {
          },
          "& .MuiSvgIcon-fontSizeSmall": {
          },
          svg: {
            "&[font-size=small]": {
            },
          },
        },
      },
    },
  };
}
