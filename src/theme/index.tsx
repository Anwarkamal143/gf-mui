import { ReactNode, useMemo } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import type {} from "@mui/x-date-pickers/themeAugmentation";

// hooks
import useSettings from "hooks/useSettings";
//
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import breakpoints from "./breakpoints";
import { commonTypography } from "./common";

import componentsOverride from "./overrides";
import palette, { defualtTheme } from "./palette";
import shadows, { customShadows } from "./shadows";

// ----------------------------------------------------------------------

type IThemeProvider = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: IThemeProvider) {
  const { themeMode, themeDirection } = useSettings();

  const isLight = themeMode === "light";
  const deftheme = defualtTheme(themeMode as ThemeModes);

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography: isLight
        ? { ...deftheme.typography, ...commonTypography }
        : { ...deftheme.typography, ...commonTypography },
      breakpoints,
      shape: { ...deftheme.shape },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(deepmerge(deftheme, themeOptions));
  theme.components = componentsOverride(theme);
  console.log({ theme });
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          {children}
        </LocalizationProvider>
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
