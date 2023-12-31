import styled from "@emotion/styled";

import { QUERIES } from "@/styles/theme";

export const Wrapper = styled.div`
  /* Altura de la ventana gráfica dinámica */
  height: 100dvh;
  height: 100vh;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media ${QUERIES.laptopAndSmaller} {
    max-width: 90%;
  }

  &.align-center {
    height: 100%;
    align-items: center;
    display: flex;
  }
  @media print {
    width: 100%;
    min-width: 100%;
  }
`;
