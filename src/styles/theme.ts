export const theming = {
  colors: {
    primary: "hsl(210deg, 30%, 8%)",
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
