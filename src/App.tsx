import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import BottomNavigation from "components/ButtomNavigation";
import Custom from "components/Custom";
import CustomNew from "components/CustomNew";
import ThemeProvider from "theme";
import ThemeSettings from "theme/settings";
import "./App.css";
// import CanvasBlur from "./Canvasblur";

const ButtonCom = () => {
  return (
    <>
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
      <BottomNavigation />

      <Custom />

      <CustomNew />
    </>
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
