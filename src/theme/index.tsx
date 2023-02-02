import { ReactNode, useMemo } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
// hooks
import useSettings from "hooks/useSettings";
//
import breakpoints from "./breakpoints";
import componentsOverride from "./overrides";
import palette, { defualtTheme } from "./palette";
import shadows, { customShadows } from "./shadows";
import typography from "./typography";

// ----------------------------------------------------------------------

type IThemeProvider = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: IThemeProvider) {
  const { themeMode, themeDirection } = useSettings();

  const isLight = themeMode === "light";

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { ...defualtTheme.shape},
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(deepmerge(defualtTheme, themeOptions));
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
