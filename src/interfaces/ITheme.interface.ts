import { Color } from "@mui/material";
import { CustomShadowType } from "theme/shadows";

type CommonColorShades = {
  "4p": string;
  "8p": string;
  "12p": string;
  "30p": string;
  "100p": string;
};
type ColorShades = {
  "8p": string;
  "12p": string;
  "16p"?: string;
  "30p": string;
  "50p": string;
  "160p"?: string;
  "190p"?: string;
};
type TextTypeShades = {
  "4p": string;
  "12p": string;
  "18p": string;
  "30p": string;
};
type OtherPaletteProperties = {
  divider: string;
  outlinedBorder: string;
  filledInputBackground: string;
  standardInputLine: string;
  snackbar: string;
  ratingActive: string;
  focusRingColor: string;
};
declare module "@mui/material/styles" {
  interface Theme {
    // status: {
    //   danger: React.CSSProperties["color"];
    // };
    customShadows: CustomShadowType;
  }
  interface TypographyVariants {
    muted: React.CSSProperties;
    article: React.CSSProperties;
  }
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    muted?: React.CSSProperties;
    article?: React.CSSProperties;
  }
  interface TypeBackground {
    neutral: TypeBackground["default"];
  }

  interface TypeBackgroundOptions {
    neutral: TypeBackground["default"];
  }

  interface Palette {
    // neutral: Palette["primary"];
    // darker?: Palette["grey"];
    // lighter?: Palette["grey"];
    other?: OtherPaletteProperties;
    gfGrey: Partial<Color> & { GF50: string; GF75: string; GF100: string };
    indigo: Partial<Color>;
    deepPurple: Partial<Color>;
    amber: Partial<Color>;
    pink: Partial<Color>;
    orange: Partial<Color>;
    deepOrange: Partial<Color>;
    green: Partial<Color>;
    red: Partial<Color>;
    lightGreen: Partial<Color>;
    purple: Partial<Color>;
    lime: Partial<Color>;
    lightBlue: Partial<Color>;
    yellow: Partial<Color>;
    cyan: Partial<Color>;
    teal: Partial<Color>;
    blue: Partial<Color>;
    blueGray: Partial<Color>;
  }
  interface PaletteOptions {
    // neutral: PaletteOptions["primary"];
    // darker?: Palette["grey"];
    // lighter?: Palette["grey"];
    // grey: Partial<Color> & { GF50: string };
  }

  interface PaletteColor {
    // remove it after words
    darker?: string;
    lighter?: string;
    shades?: ColorShades;
  }
  interface CommonColors {
    blackshades: Pick<CommonColorShades, "4p" | "12p" | "30p" | "100p">;
    whiteshades: Pick<CommonColorShades, "12p" | "30p" | "100p" | "8p">;
  }

  interface ThemeOptions {
    customShadows?: CustomShadowType;
  }
  interface TypeText {
    muted?: string;
    primary_shades?: Pick<TextTypeShades, "4p" | "12p" | "30p">;
    secondarys_shades?: Pick<TextTypeShades, "4p" | "18p">;
  }
  // interface grey extends Color {
  //   GF50?: string;
  //   GF100?: string;
  // }
}
// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    muted: true;
    article: true;
    // h3: false;
  }
}
declare module "@mui/material/Colors" {
  interface grey extends Color {
    GF50?: string;
    GF100?: string;
  }
}
