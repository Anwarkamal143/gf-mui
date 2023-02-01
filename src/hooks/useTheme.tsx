import { createTheme } from "@mui/material";

import { deepmerge } from "@mui/utils";
import { useMemo } from "react";
import { defualtTheme } from "theme";
import breakpoints from "theme/breakpoints";
import componentsOverride from "theme/overrides";
import palette from "theme/palette";
import shadows, { customShadows } from "theme/shadows";
import typography from "theme/typography";
type Props = {
  themeMode: "light" | "dark";
  themeDirection: "ltr" | "rtl";
};

const useTheme = (props: Props) => {
  const { themeMode = "light", themeDirection = "ltr" } = props;

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
  return theme;
};

export default useTheme;
