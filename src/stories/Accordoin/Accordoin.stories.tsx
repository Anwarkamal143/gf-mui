import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Accordion from "@mui/material/Accordion";
import ControlledAccordions, {
  CustomizedAccordions,
  SimpleAccordion,
} from "./Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const Default: ComponentStory<typeof Accordion> = (props) => (
  <SimpleAccordion {...props} />
);
export const WidthHeadings: ComponentStory<typeof Accordion> = (props) => (
  <ControlledAccordions {...props} />
);
export const CustomAccordion: ComponentStory<typeof Accordion> = (props) => (
  <CustomizedAccordions {...props} />
);
