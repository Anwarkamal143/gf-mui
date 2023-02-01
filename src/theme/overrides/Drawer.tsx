import { Theme } from "@mui/material/styles";
// ----------------------------------------------------------------------

export default function Drawer(theme: Theme) {
  return {
    MuiDrawer: {
      styleOverrides: {
        modal: {
          '&[role="presentation"]': {
            "& .MuiDrawer-paperAnchorLeft": {},
            "& .MuiDrawer-paperAnchorRight": {},
          },
        },
      },
    },
  };
}
