import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import {
  DateTimePicker,
  DesktopTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SimpleBottomNavigation from "components/ButtomNavigation";
import Custom from "components/Custom";
import CustomNew from "components/CustomNew";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import ThemeProvider from "theme";
import ThemeSettings from "theme/settings";
import "./App.css";
// import CanvasBlur from "./Canvasblur";

const ButtonCom = () => {
  const [value, setValue] = useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
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
        {/* <NativePickers />
        <MaterialUIPickers /> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopTimePicker
            label="For desktop"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="DatePicker"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} variant="filled" />}
          />
          <DateTimePicker
            label="Date&Time picker"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} variant="filled" />}
          />

          <DateTimePicker
            label="Tabs"
            renderInput={(params) => <TextField {...params} />}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            hideTabs={false}
            // components={{ Tabs: CustomTabs }}

            // componentsProps={{
            //   tabs: {
            //     dateRangeIcon: <LightModeIcon />,
            //     timeIcon: <AcUnitIcon />,
            //   },
            // }}
          />
        </LocalizationProvider>
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
