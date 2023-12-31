export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const SIZES = {
  "0.5": "0.5rem",
  "0.875": "0.875rem",
  "1": "1rem",
  "1.25": "1.25rem",
  "1.75": "1.75rem",
  "2": "2rem",
  "2.125": "2.125rem",
  "2.25": "2.25rem",
  "2.5": "2.5rem",
  "2.75": "2.75rem",
  "3": "3rem",
  "3.125": "3.125rem",
  "3.25": "3.25rem",
  "3.5": "3.5rem",
  "3.75": "3.75rem",
  "4": "4rem",
  "4.125": "4.125rem",
  "4.25": "4.25rem",
  "4.5": "4.5rem",
  "4.75": "4.75rem",
  "5": "5rem",
  "5.125": "5.125rem",
  "5.25": "5.25rem",
  "5.5": "5.5rem",
  "5.75": "5.75rem",
  "6": "6rem",
  "6.125": "6.125rem",
  "6.25": "6.25rem",
  "6.5": "6.5rem",
  "6.75": "6.75rem",
  "7": "7rem",
  "7.125": "7.125rem",
  "7.25": "7.25rem",
  "7.5": "7.5rem",
  "7.75": "7.75rem",
  "8": "8rem",
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
  ...SIZES,
};

export type MainTheme = typeof theme;
