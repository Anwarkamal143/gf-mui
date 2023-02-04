import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Breadcrumbs, Grid, Link } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";
import AppBarComp from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
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
    <AppBarComp position="static">
      <Toolbar>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8} md={4}>
            <Stack direction="row" alignItems="center">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
              >
                <KeyboardBackspaceIcon />
              </IconButton>
              <AlertTitle sx={{ mb: "0" }}>{title}</AlertTitle>
            </Stack>
          </Grid>
          <Grid
            item
            xs={4}
            display={{ xs: "none", md: "flex" }}
            justifyContent="center"
          >
            <Breadcrumbs aria-label="breadcrumb" color="white">
              <Link underline="hover" href="/" color="white">
                MUI
              </Link>
              <Link
                underline="hover"
                color="white"
                href="/material-ui/getting-started/installation/"
              >
                Core
              </Link>
            </Breadcrumbs>
          </Grid>
          <Grid item xs={4} display="flex" justifyContent={"flex-end"}>
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
          </Grid>
        </Grid>
      </Toolbar>
    </AppBarComp>
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
