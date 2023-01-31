import { CustomShadowType } from "theme/shadows";

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
  }
  interface PaletteOptions {
    // neutral: PaletteOptions["primary"];
    // darker?: Palette["grey"];
    // lighter?: Palette["grey"];
  }

  interface PaletteColor {
    darker: string;
    lighter: string;
  }

  interface ThemeOptions {
    customShadows?: CustomShadowType;
  }
  interface TypeText {
    muted?: string;
  }
}
// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    muted: true;
    article: true;
    // h3: false;
  }
}
