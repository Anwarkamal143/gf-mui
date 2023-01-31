import Slider from "@mui/material/Slider";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

export const Default: ComponentStory<typeof Slider> = (props) => (
  <Slider {...props} />
);
