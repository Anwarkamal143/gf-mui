import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import InputLabel from "@mui/material/InputLabel";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { ReactElement, ReactNode, forwardRef } from "react";

import { useDrag } from "react-dnd";
type IProfileCardProps = {
  options: {
    draggable: boolean;
    switcher: boolean;
  };
  title: string;
  subTitle?: string;
  rightIcon?: ReactNode | ReactElement;
  AvatarImage: string | ReactNode | ReactElement;
};
const ProfileCard = forwardRef((props: IProfileCardProps, ref: any) => {
  const {
    options = { draggable: true, switcher: false },
    title,
    subTitle,
    rightIcon,
    AvatarImage,
  } = props;
  const [{ opacity }, drag, preview] = useDrag(() => ({
    type: "profileCard",
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  }));

  return (
    <Stack ref={preview} style={{ opacity }}>
      {options?.draggable && <DragIndicatorIcon ref={drag} />}
      {options?.switcher && <Switch />}
      {title && (
        <Typography variant="subtitle1" gutterBottom>
          {title}
        </Typography>
      )}
      {subTitle && <InputLabel>{subTitle}</InputLabel>}
      {typeof AvatarImage === "string" ? (
        <Avatar alt={AvatarImage} src={AvatarImage} />
      ) : (
        AvatarImage
      )}
      {rightIcon}
    </Stack>
  );
});

export default ProfileCard;
