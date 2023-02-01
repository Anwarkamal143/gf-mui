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
import palette from "./palette";
import shadows, { customShadows } from "./shadows";
import typography from "./typography";

// ----------------------------------------------------------------------

type IThemeProvider = {
  children: ReactNode;
};
export const defualtTheme = createTheme({
  spacing: (factor: number) => `${0.25 * factor}rem`,
});
export default function ThemeProvider({ children }: IThemeProvider) {
  const { themeMode, themeDirection } = useSettings();

  const isLight = themeMode === "light";

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography,
      breakpoints,
      shape: { ...defualtTheme.shape, borderRadius: 8 },
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
