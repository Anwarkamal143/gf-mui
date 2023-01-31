import {
  CssBaseline,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material";

import { themes } from "@storybook/theming";
import muiBrandTheme from "./MuiBrandTheme";

import useTheme from "hooks/useTheme";

export const globalTypes = {
  theme: {
    title: "Theme",
    description: "Global theme for components",
    defaultValue: "dark",
    toolbar: {
      // icon: "circlehollow",
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: "light", left: "☀️", title: "Light" },
        { value: "dark", left: "🌙", title: "Dark" },
      ],
      // Property that specifies if the name of the item will be displayed
      title: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};
export const parameters = {
  viewMode: "docs",
  docs: {
    theme: muiBrandTheme,
  },
  options: {
    storySort: {
      order: ["Default"],
    },
  },
  backgrounds: {
    default: "dark",
    values: [
      {
        name: "light",
        value: "#fff",
      },
      {
        name: "dark",
        value: "rgb(10, 25, 41)",
      },
      // {
      //   name: "twitter",
      //   value: "#00aced",
      // },
      // {
      //   name: "facebook",
      //   value: "#3b5998",
      // },
    ],
    grid: {
      disable: true,
    },
  },
  // automatically create action args for all props that start with "on"
  actions: { argTypesRegex: "^on.*" },
  dependencies: {
    // display only dependencies/dependents that have a story in storybook
    // by default this is false
    withStoriesOnly: true,

    // completely hide a dependency/dependents block if it has no elements
    // by default this is false
    hideEmpty: true,
  },
};
export const withMuiTheme = (Story, context) => {
  // The theme global we just declared
  const { theme: themeKey } = context.globals;
  // only recompute the theme if the themeKey changes
  const theme = useTheme({ themeMode: themeKey, themeDirection: "ltr" });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export const decorators = [withMuiTheme];
