import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Signika:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
/* Box sizing rules */

*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html {
  --body-bgcolor: hsl(225deg 10% 7.84%);
  --bebas-neue: 'PT Sans Narrow', sans-serif;
  scrollbar-gutter: stable;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
  background-color: var(--body-bgcolor);


}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`;

export default GlobalStyles;
