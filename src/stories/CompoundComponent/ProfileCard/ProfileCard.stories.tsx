import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import ProfileCard from "module/ProfileCard";

export default {
  title: "CompoundComponent/ProfileCard",
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

export const DraggableComponent: ComponentStory<typeof ProfileCard> = (
  props
) => {
  return (
    <ProfileCard
      options={{ draggable: true, switcher: false }}
      title="Project Manager"
      subTitle="zach@globalist.com"
      AvatarImage="/static/images/avatar/1.jpg"
      rightIcon={<SettingsOutlinedIcon />}
    />
  );
};

export const SimpleCard: ComponentStory<typeof ProfileCard> = (props) => {
  return (
    <ProfileCard
      options={{ draggable: true, switcher: false }}
      title="Project Manager"
      subTitle="zach@globalist.com"
      AvatarImage={<LocalOfferOutlinedIcon />}
    />
  );
};
