import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0;
  @media ${(props) => props.theme.phoneAndSmaller} {
  }
`;

export const TitleTag = styled.h2`
  font-size: clamp(5rem, 12vw + 2rem, 5rem);
  color: #fff;
  line-height: 0.7;
  cursor: default;
  text-align: center;
  @media ${(props) => props.theme.phoneAndSmaller} {
    text-align: center;
  }
`;
