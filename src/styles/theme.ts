export const theming = {
  colors: {
    primary: "hsl(245deg 100% 60%)",
  },

  transitions: {
    "0.3s": "all 0.3s cubic-bezier(.51,.92,.24,1.15);",
  },

  fonts: {
    Montserrat: "'Montserrat', sans-serif",
    Rubik: "'Rubik', sans-serif",
    SpaceMono: "'Space Mono', monospace",
  },
};

export const theme = {
  ...theming,
};

export type MainTheme = typeof theme;
