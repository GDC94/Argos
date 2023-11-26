import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  @media ${(props) => props.theme.phoneAndSmaller} {
  }
`;

export const FrontPageTag = styled.p`
  font-size: clamp(1.5rem, 2vw + 1rem, 2rem);
  color: rgb(97 123 255);
`;
