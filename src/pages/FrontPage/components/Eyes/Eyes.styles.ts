import styled from "@emotion/styled";

import { QUERIES, SIZES } from "@/styles/theme";

export const Wrapper = styled.div`
  height: 300px;
  display: flex;
  align-items: flex-end;
  padding-bottom: ${SIZES["3.5"]};

  & svg {
    pointer-events: none;
  }

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;
