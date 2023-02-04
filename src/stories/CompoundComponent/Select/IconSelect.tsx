import ContactsIcon from "@mui/icons-material/Contacts";
import { Checkbox, ListItemText } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import { Fragment, useState } from "react";
export const SelectIcon = (props: SelectProps) => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Fragment>
      <FormControl fullWidth color="error">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuList>
            <MenuItem value={10}>
              <Checkbox checked={true} />
              <ContactsIcon />
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </MenuList>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Fragment>
  );
};
