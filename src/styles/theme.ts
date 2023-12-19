export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BRAEKPOINTS = {
  phone: 600,
  tablet: 900,
  laptop: 1300,
  tabletMin: 550,
  laptopMin: 1100,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BRAEKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BRAEKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BRAEKPOINTS.laptop / 16}rem)`,
  tabletOnly: `
    (min-width: ${BRAEKPOINTS.tabletMin / 16}rem) and
    (max-width: ${(BRAEKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const THEMING = {
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
  size: {
    "0.5rem": "0.5rem",
    "0.75rem": "0.75rem",
    "1rem": "1rem",
    "1.25rem": "1.25rem",
    "1.5rem": "1.5rem",
  },
  fonts: {
    Montserrat: "'Montserrat', sans-serif",
  },
};

export const theme = {
  ...THEMING,
  ...QUERIES,
  ...BRAEKPOINTS,
  ...WEIGHTS,
};

export type MainTheme = typeof theme;
