import Button from "@mui/material/Button";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (props) => {
  const { children = "Button", ...rest } = props;
  return <Button {...rest}>{children}</Button>;
};
