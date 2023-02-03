import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SimpleBottomNavigation from "components/ButtomNavigation";
import Custom from "components/Custom";
import CustomNew from "components/CustomNew";
import { MaterialUIPickers, NativePickers } from "stories/DateTime/DateTime";
import ThemeProvider from "theme";
import ThemeSettings from "theme/settings";
import "./App.css";
// import CanvasBlur from "./Canvasblur";

const ButtonCom = () => {
  return (
    <Box p={3}>
      <Stack spacing={2} direction="row">
        <Button variant="contained" size="large">
          Large
        </Button>
        <Button variant="contained">Medium</Button>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Typography variant={"AlertTitle"}>tyepg</Typography>
      </Stack>
      <SimpleBottomNavigation />

      <Custom />

      <CustomNew />
      <Stack mx={"auto"} width={"30%"} spacing={3}>
        <NativePickers />
        <MaterialUIPickers />
      </Stack>
    </Box>
  );
};
function App() {
  return (
    <ThemeProvider>
      <ThemeSettings>
        {/* <CanvasBlur /> */}
        App
        <ButtonCom />
      </ThemeSettings>
    </ThemeProvider>
  );
}

export default App;
