import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Avatar from "@mui/material/Avatar";
export default {
  title: "Components/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = (props) => (
  <Avatar {...props} />
);
