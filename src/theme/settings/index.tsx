// import PropTypes from 'prop-types';
//
import SettingsDrawer from "./drawer";
//
import { ReactNode } from "react";
import ThemeColorPresets from "./ThemeColorPresets";
import ThemeContrast from "./ThemeContrast";

type IThemeSettingsProps = {
  children: ReactNode;
};
export default function ThemeSettings({ children }: IThemeSettingsProps) {
  return (
    <ThemeColorPresets>
      <ThemeContrast>
        {children}
        <SettingsDrawer />
      </ThemeContrast>
    </ThemeColorPresets>
  );
}
