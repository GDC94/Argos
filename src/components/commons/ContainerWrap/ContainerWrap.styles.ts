import styled from "@emotion/styled";

export const Container = styled.div`
  width: 90%;
  max-width: 1640px;
  margin: 0 auto;
  @media screen and (max-width: 1440px) {
    max-width: 90%;
  }
  &.align-center {
    height: 100%;
    align-items: center;
    display: flex;
  }
  @media print {
    width: 100%;
    min-width: 100%;
  }
`;
