import Badge from "@mui/material/Badge";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

export const Default: ComponentStory<typeof Badge> = (props) => (
  <Badge {...props} />
);
