import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const LayoutWrapper = styled.div`
  width: 100%;
  z-index: 2;
`;
