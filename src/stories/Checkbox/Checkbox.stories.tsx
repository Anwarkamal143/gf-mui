import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Checkbox from "@mui/material/Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = (props) => (
  <Checkbox {...props} />
);
