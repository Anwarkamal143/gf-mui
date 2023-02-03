import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { MaterialUIPickers, NativePickers as NPickers } from "./DateTime";
export default {
  title: "Components/DateTimePickers",
  component: MaterialUIPickers,
} as ComponentMeta<typeof MaterialUIPickers>;

export const DesignPickers: ComponentStory<typeof MaterialUIPickers> = (
  props
) => <MaterialUIPickers />;
export const NativePickers: ComponentStory<typeof NPickers> = (props) => (
  <NPickers />
);
