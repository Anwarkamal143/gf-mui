import type { ComponentMeta, ComponentStory } from "@storybook/react";

import CircularProgress from "@mui/material/CircularProgress";

export default {
  title: "Components/CircularProgress",
  component: CircularProgress,
} as ComponentMeta<typeof CircularProgress>;

export const Default: ComponentStory<typeof CircularProgress> = (props) => (
  <CircularProgress {...props} />
);
