import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-image: url("./banda.png"); /* Ruta de la imagen de fondo */
  background-size: contain; /* Cubre todo el contenedor */
  background-position: center; /* Centra la imagen en el contenedor */
  background-repeat: repeat; /* Evita que la imagen se repita */
`;

export const RowTop = styled.div`
  overflow: hidden;
`;

export const WrapperLeft = styled.div`
  height: auto;
  display: flex;
  gap: 15px;

  padding: 5rem;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const FrontEndDevTag = styled.h2`
  font-size: clamp(2rem, 9vw + 5rem, 12rem);
  color: #f6f6f6;
  line-height: 0.8;
`;

export const FrontEndDevSubTag = styled.h5`
  font-size: clamp(1rem, 4vw + 1rem, 6rem);
  color: #ffffff;
  letter-spacing: 2px;
`;

export const WrapperRight = styled.div`
  width: 100%;
  display: grid;
  padding: 16px;
  height: 20%;
  grid-template-columns: repeat(auto-fill, minmax(min(400px, 100%), 1fr));
`;

export const Item = styled.div`
  height: auto;
  padding: 16px;
  background-image: url("./barras.png"); /* Ruta de la imagen de fondo */
  background-size: contain; /* Cubre todo el contenedor */
  background-position: center;
  background-repeat: repeat; /* Evita que la imagen se repita */
`;

export const WrapperFooter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  background-color: red;
`;

export const FrontPageTitles = styled.div`
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;
  padding-left: 5rem;
  padding-right: 5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const FrontPageTag = styled.p`
  font-size: 2rem;
  color: #e3fc7b;
`;

export const AvailableForWork = styled.p`
  font-size: 4rem;
  color: #202e3c;
`;

export const RowDown = styled.div`
  height: 17rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 3rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;
