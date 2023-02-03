import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import {SelectC} from "./Select"

export default {
  title: "Components/Select",
  component: SelectC,
} as ComponentMeta<typeof Select>;

export const Default: ComponentStory<typeof Select> = (props) => (
  <SelectC />
);
