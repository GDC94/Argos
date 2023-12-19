import styled from "@emotion/styled";

import { QUERIES } from "@/styles/theme";

export const Wrapper = styled.div`
  /*
Altura de la ventana gráfica dinámica*/
  height: 100dvh;
  height: 100vh;
  width: 100%;
  /*
  background-image: url("./server.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  */
  display: flex;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-start;

  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
  }
`;

export const Right = styled.div`
  width: 50%;
  height: 100%;
  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
  }
`;
