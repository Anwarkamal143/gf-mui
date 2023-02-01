import ThemeProvider from "theme";
import ThemeSettings from "theme/settings";
import "./App.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import CanvasBlur from "./Canvasblur";

function App() {
  return (
    <ThemeProvider>
      <ThemeSettings>
        {/* <CanvasBlur /> */}
        App
        <Stack spacing={2} direction="row">
      <Button variant="contained" size="large">Large</Button>
      <Button variant="contained">Medium</Button>
      <Button variant="contained" size="small">Small</Button>
    </Stack>
      </ThemeSettings>
    </ThemeProvider>
  );
}

export default App;
