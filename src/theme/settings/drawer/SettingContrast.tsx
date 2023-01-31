// @mui
import { CardActionArea, Grid, RadioGroup } from "@mui/material";
import { styled } from "@mui/material/styles";
// hooks
import useSettings from "hooks/useSettings";
//
import Iconify from "components/Iconify";
import BoxMask from "./BoxMask";

// ----------------------------------------------------------------------

const BoxStyle = styled(CardActionArea)(({ theme }) => {
  const grey: Record<string, any> = theme.palette.grey;
  return {
    height: 72,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.disabled,
    border: `solid 1px ${grey[500_12]}`,
    borderRadius: Number(theme.shape.borderRadius) * 1.25,
  };
});

// ----------------------------------------------------------------------

export default function SettingContrast() {
  const { themeContrast, onChangeContrast } = useSettings();

  return (
    <RadioGroup
      name="themeContrast"
      value={themeContrast}
      onChange={onChangeContrast}
    >
      <Grid dir="ltr" container spacing={2.5}>
        {["default", "bold"].map((contrast, index) => {
          const isSelected = themeContrast === contrast;

          return (
            <Grid key={contrast} item xs={6}>
              <BoxStyle
                sx={{
                  ...(isSelected && {
                    color: "primary.main",
                    boxShadow: (theme) => theme.customShadows.z20,
                  }),
                }}
              >
                <Iconify
                  icon={index === 0 ? "cil:contrast" : "ion:contrast-outline"}
                  width={28}
                  height={28}
                />
                <BoxMask value={contrast} />
              </BoxStyle>
            </Grid>
          );
        })}
      </Grid>
    </RadioGroup>
  );
}
