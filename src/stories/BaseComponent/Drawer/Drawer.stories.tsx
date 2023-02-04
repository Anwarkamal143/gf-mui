import type { ComponentMeta, ComponentStory } from "@storybook/react";
import SwipeableTemporaryDrawer from "./Drawers/Swipeable";
import SEdgeDrawer from "./Drawers/SwipeableEdge";
import TDrawer from "./Drawers/Temporary";

export default {
  title: "Components/Drawer",
  component: TDrawer,
} as ComponentMeta<typeof TDrawer>;

const TemporaryDrawerTemplate: ComponentStory<typeof TDrawer> = (props) => {
  return <TDrawer />;
};
export const TemporaryDrawer = TemporaryDrawerTemplate.bind({});
const SwipableDrawerTemplate: ComponentStory<typeof SwipeableTemporaryDrawer> =
  (props) => {
    return <SwipeableTemporaryDrawer {...props} />;
  };
export const SwipableDrawer = SwipableDrawerTemplate.bind({});
const SwipableEdgeDrawerTemplate: ComponentStory<typeof SEdgeDrawer> = (
  props
) => {
  return <SEdgeDrawer {...props} />;
};
export const SwipeableEdgeDrawer = SwipableEdgeDrawerTemplate.bind({});
SwipableEdgeDrawerTemplate.argTypes = {
  keepMounted: {
    type: "boolean",
    defaultValue: true,
  },
};
