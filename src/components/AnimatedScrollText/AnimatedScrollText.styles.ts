import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
`;

export const WrapperContent = styled.div`
  position: relative;
  white-space: nowrap;
`;

export const AnimatedText = styled.p`
  position: relative;
  margin: 0px;
  font-size: 4rem;
  color: #202e3c;

  &::nth-of-type(2) {
    position: absolute;
    left: 100%;
    top: 0;
  }
`;
