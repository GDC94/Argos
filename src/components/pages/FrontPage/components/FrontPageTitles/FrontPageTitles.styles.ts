import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: auto;
  display: flex;
  gap: 15px;
  position: relative;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const FrontEndDevTag = styled.h2`
  font-size: clamp(2rem, 5vw + 4rem, 11rem);
  color: #fff;
  line-height: 0.8;
  cursor: default;
  margin-top: 3rem;
  text-align: center;

  @media ${(props) => props.theme.phoneAndSmaller} {
    text-align: center;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;

  @media ${(props) => props.theme.phoneAndSmaller} {
    flex-direction: column;
  }
`;

export const FrontEndDevSubTag = styled.h5`
  font-size: clamp(1rem, 3vw + 1rem, 5rem);
  color: #fff;
  letter-spacing: 2px;
  cursor: default;
`;

export const Light = styled.div`
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 20%, transparent 10%, hsl(210deg 30% 8% / 60%) 40%);
`;
