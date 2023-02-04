import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Breadcrumbs, Link } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import AppBarComp from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import { alpha, styled } from "@mui/material/styles";
import { ComponentMeta } from "@storybook/react";
import { ReactNode } from "react";
const Search = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

type IAppBarProps = {
  title?: ReactNode;
};
export const AppBar = (props: IAppBarProps) => {
  const { title = "System Settings" } = props;

  const menuId = "primary-search-account-menu";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarComp position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <AlertTitle>{title}</AlertTitle>
          <Stack direction={"row"} alignItems={"center"} ml="auto">
            <Stack
              direction={"row"}
              alignItems={"center"}
              display={{ xs: "none", md: "flex" }}
            >
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  MUI
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  href="/material-ui/getting-started/installation/"
                >
                  Core
                </Link>
              </Breadcrumbs>
            </Stack>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              //   onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <GridViewOutlinedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBarComp>
    </Box>
  );
};

export default {
  title: "CompoundComponent/Appbar",
  component: AppBar,
  argTypes: {
    title: {
      type: "string",
      defaultValue: "App Bar",
    },
  },
} as ComponentMeta<typeof AppBar>;
