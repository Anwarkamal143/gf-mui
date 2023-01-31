import { MenuItem } from "@mui/material";
import Select from "@mui/material/Select";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

export const Default: ComponentStory<typeof Select> = (props) => (
  <Select id="select" value={10} label="Age" onChange={console.log} {...props}>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
);
