import styled from "@emotion/styled";

interface ContentProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
  margin: 0 auto;
`;

export const FrontEndDevTag = styled.h2`
  font-size: clamp(5rem, 4vw + 2rem, 3rem);
  color: #fff;
  line-height: 0.7;
  cursor: default;
  text-align: center;

  @media ${(props) => props.theme.phoneAndSmaller} {
    text-align: center;
  }
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
`;

export const FrontEndDevSubTag = styled.h5`
  font-size: clamp(1rem, 2vw + 1rem, 3rem);
  color: #fff;
  cursor: default;
  text-align: center;
`;

export const FlagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 1rem;
`;

export const Light = styled.div`
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 30%, transparent 10%, hsl(210deg 30% 8% / 40%) 40%);
`;
