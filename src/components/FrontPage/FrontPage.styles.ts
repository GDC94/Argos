import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`;

export const FrontEndDevTag = styled.h2`
  font-size: clamp(2rem, 12vw + 1rem, 11.5rem);
  color: #f6f6f6;
  letter-spacing: 4px;
  line-height: 8rem;
`;

export const FrontEndDevSubTag = styled.h5`
  font-size: clamp(1rem, 6vw + 1rem, 5rem);
  color: #f6f6f6;
  letter-spacing: 2px;

  color: white;
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
  font-size: 1.5rem;
  color: #ffd500;
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
