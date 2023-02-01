import { Button, ButtonProps } from "@mui/material";

type Props = ButtonProps;

const index = (props: Props) => {
  const { children = "Button", ...rest } = props;
  return <Button {...rest}>{children}</Button>;
};

export default index;
