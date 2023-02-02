import BadgeC, { BadgeProps } from "@mui/material/Badge";
import Box from "@mui/material/Box";
type IBadgeProps = BadgeProps;
function Badge(props: IBadgeProps) {
  const { children = "", ...rest } = props;

  return (
    <Box
    //   sx={{
    //     color: "action.active",
    //     display: "flex",
    //     flexDirection: "column",
    //     "& > *": {
    //       marginBottom: 2,
    //     },
    //     "& .MuiBadge-root": {
    //       marginRight: 4,
    //     },
    //   }}
    >
      <BadgeC {...rest}>{children}</BadgeC>
    </Box>
  );
}
export default Badge;
