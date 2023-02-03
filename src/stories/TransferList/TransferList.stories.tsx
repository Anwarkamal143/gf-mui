// import Alert from "@mui/material/Alert";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import TransferList from "components/TransferList";
export default {
  title: "Components/TransferList",
  component: TransferList,
} as ComponentMeta<typeof TransferList>;

export const Default: ComponentStory<typeof TransferList> = (props: any) => (
  <TransferList {...props} />
);
