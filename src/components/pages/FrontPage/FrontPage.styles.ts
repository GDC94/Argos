import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;
  /*Altura de la ventana gráfica dinámica*/
  height: 100dvh;
  width: 100%;
  background-image: url("./banda.png");
  background-size: contain;
  background-position: center;
  background-repeat: repeat;
`;

export const RowTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const RowDown = styled.div`
  display: flex;
  height: 50%;
  justify-content: space-between;
  align-items: center;
`;
