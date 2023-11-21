export const theming = {
  colors: {
    /**primary: "hsl(210deg, 30%, 8%)",,*/
    primary: "#0e141b",
    primaryText: "rgb(97 123 255)",
    colorSuccess: "hsl(160deg, 100%, 40%)",
    gray300: "hsl(210deg, 10%, 40%)",
    gray400: "hsl(210deg, 9%, 45%)",
    gray500: "hsl(210deg, 8%, 50%)",
    yellow: "hsl(50.35deg 100% 50%)",
    tomato: "hsl(0deg 100% 66.67%)",
    organge: "hsl(30.12deg 100% 50%)",
  },

  transitions: {
    "0.3s": "all 0.3s cubic-bezier(.51,.92,.24,1.15);",
  },

  fonts: {
    Montserrat: "'Montserrat', sans-serif",
  },
};

export const theme = {
  ...theming,
};

export type MainTheme = typeof theme;
