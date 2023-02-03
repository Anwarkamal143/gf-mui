import { createTheme } from "@mui/material";

import { deepmerge } from "@mui/utils";
import type {} from "@mui/x-date-pickers/themeAugmentation";
import { useMemo } from "react";
import breakpoints from "theme/breakpoints";
import { commonTypography } from "theme/common";
import componentsOverride from "theme/overrides";
import palette, { defualtTheme } from "theme/palette";
import shadows, { customShadows } from "theme/shadows";

type Props = {
  themeMode?: "light" | "dark";
  themeDirection: "ltr" | "rtl";
};

const useTheme = (props: Props) => {
  const { themeMode = "light", themeDirection = "ltr" } = props;

  const isLight = themeMode === "light";
  const defTheme = defualtTheme(themeMode as ThemeModes);
  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      typography: isLight
        ? { ...defTheme.typography, ...commonTypography }
        : { ...defTheme.typography, ...commonTypography },
      breakpoints,
      shape: { ...defTheme.shape },
      direction: themeDirection,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark,
    }),
    [isLight, themeDirection]
  );

  const theme = createTheme(deepmerge(defTheme, themeOptions));
  theme.components = componentsOverride(theme);
  return theme;
};

export default useTheme;
