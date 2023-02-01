import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "components/Button";
export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (props) => {
  const { children = "Button", ...rest } = props;
  return <Button {...rest}>{children}</Button>;
};
