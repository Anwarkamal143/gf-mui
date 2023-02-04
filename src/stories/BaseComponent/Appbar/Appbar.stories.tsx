import type { ComponentMeta, ComponentStory } from "@storybook/react";
import AppBar from "components/Appbar";
export default {
  title: "Components/Appbar",
  component: AppBar,
  argTypes: {
    title: {
      type: "string",
      defaultValue: "App Bar",
    },
  },
} as ComponentMeta<typeof AppBar>;

export const Default: ComponentStory<typeof AppBar> = (props) => {
  const { ...rest } = props;
  return <AppBar {...rest} />;
};
