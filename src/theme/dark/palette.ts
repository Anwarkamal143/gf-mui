import { Palette } from '@mui/material/styles';
import { commonPalleteColors } from 'theme/common';
import { defualtTheme } from 'theme/palette';

const defaultPalette = defualtTheme.palette;

export const darkPallete: Palette = {
  ...defaultPalette,
  mode: 'dark',
  primary: {
    main: 'rgba(140, 59, 45, 1)',
    light: 'rgba(151, 78, 65, 1)',
    dark: 'rgba(112, 47, 36, 1)',
    contrastText: 'rgba(255, 255, 255, 0.87)',

    shades: {
      '8p': 'rgba(140, 59, 45, 0.08)',
      '12p': 'rgba(140, 59, 45, 0.12)',
      '16p': 'rgba(140, 59, 45, 0.16)',
      '30p': 'rgba(140, 59, 45, 0.3)',
      '50p': 'rgba(140, 59, 45, 0.5)',
    },
  },
  secondary: {
    main: 'rgba(10, 140, 164, 1)',
    light: 'rgba(34, 151, 173, 1)',
    dark: 'rgba(10, 140, 164, 1)',
    contrastText: 'rgba(184, 184, 184, 0.87)',
    shades: {
      '8p': 'rgba(10, 140, 164, 0.08)',
      '12p': 'rgba(10, 140, 164, 0.12)',
      '16p': 'rgba(10, 140, 164, 0.16)',
      '30p': 'rgba(10, 140, 164, 0.3)',
      '50p': 'rgba(10, 140, 164, 0.5)',
    },
  },
  error: {
    main: 'rgba(211, 47, 175, 1)',
    light: 'rgba(218, 94, 192, 1)',
    dark: 'rgba(180, 40, 149, 1)',
    contrastText: 'rgba(255, 255, 255, 1)',
    shades: {
      '8p': 'rgba(211, 47, 175, 0.08)',
      '12p': 'rgba(211, 47, 175, 0.12)',
      '30p': 'rgba(211, 47, 175, 0.3)',
      '50p': 'rgba(211, 47, 175, 0.5)',
      '160p': 'rgba(211, 47, 175, 1)',
      '190p': 'rgba(211, 47, 175, 1)',
    },
  },

  warning: {
    main: 'rgba(161, 146, 5, 1)',
    light: 'rgba(180, 169, 63, 1)',
    dark: 'rgba(137, 124, 4, 1)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
    shades: {
      '8p': 'rgba(161, 146, 5, 0.08)',
      '12p': 'rgba(161, 146, 5, 0.12)',
      '30p': 'rgba(161, 146, 5, 0.3)',
      '50p': 'rgba(161, 146, 5, 0.5)',
      '160p': 'rgba(161, 146, 5, 1)',
      '190p': 'rgba(161, 146, 5, 1)',
    },
  },
  success: {
    main: 'rgba(18, 166, 25, 1)',
    light: 'rgba(72, 184, 78, 1)',
    dark: 'rgba(15, 141, 21, 1)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
    shades: {
      '8p': 'rgba(18, 166, 25, 0.08)',
      '12p': 'rgba(18, 166, 25, 0.12)',
      '30p': 'rgba(18, 166, 25, 0.3)',
      '50p': 'rgba(18, 166, 25, 0.5)',
      '160p': 'rgba(18, 166, 25, 1)',
      '190p': 'rgba(18, 166, 25, 1)',
    },
  },

  info: {
    main: 'rgba(10, 140, 164, 1)',
    light: 'rgba(34, 151, 173, 1)',
    dark: 'rgba(9, 119, 140, 1)',
    contrastText: 'rgba(0, 0, 0, 0.87)',
    shades: {
      '8p': 'rgba(10, 140, 164, 0.08)',
      '12p': 'rgba(10, 140, 164, 0.12)',
      '30p': 'rgba(10, 140, 164, 0.3)',
      '50p': 'rgba(10, 140, 164, 0.5)',
      '160p': 'rgba(10, 140, 164, 1)',
      '190p': 'rgba(10, 140, 164, 1)',
    },
  },
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    primary_shades: {
      '4p': 'rgba(0, 0, 0, 0.04)',
      '12p': 'rgba(255, 255, 255, 0.12)',
      '30p': 'rgba(255, 255, 255, 0.3)',
    },
    secondarys_shades: {
      '4p': 'rgba(255, 255, 255, 0.04)',
      '18p': 'rgba(255, 255, 255, 0.18)',
    },
  },

  action: {
    ...defaultPalette.action,
    hover: 'rgba(255, 255, 255, 0.08)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    focus: 'rgba(255, 255, 255, 0.12)',
    selected: 'rgba(255, 255, 255, 0.16)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    active: 'rgba(255, 255, 255, 0.56)',
  },
  background: {
    ...defualtTheme.palette.background,
    default: 'rgba(18, 18, 18, 1)',
    paper: 'rgba(18, 18, 18, 1)',
  },
  common: {
    ...defaultPalette.common,
    // Need to confirm shades
    blackshades: {
      '4p': 'rgba(0, 0, 0, 0.04)',
      '12p': 'rgba(0, 0, 0, 0.12)',
      '30p': 'rgba(0, 0, 0, 0.3)',
      '100p': 'rgba(0, 0, 0, 1)',
    },
    whiteshades: {
      '8p': 'rgba(255, 255, 255, 0.08)',
      '12p': 'rgba(255, 255, 255, 0.12)',
      '30p': 'rgba(255, 255, 255, 0.3)',
      '100p': 'rgba(255, 255, 255, 1)',
    },
  },

  other: {
    divider: 'rgba(255, 255, 255, 0.12)',
    outlinedBorder: 'rgba(255, 255, 255, 0.23)',
    filledInputBackground: 'rgba(255, 255, 255, 0.09)',
    standardInputLine: 'rgba(255, 255, 255, 0.42)',
    snackbar: 'rgba(50, 50, 50, 1)',
    ratingActive: 'rgba(255, 180, 0, 1)',
    focusRingColor: 'rgba(153, 200, 255, 1)',
  },
  ...commonPalleteColors,
};
