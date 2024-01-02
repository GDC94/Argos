import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { QUERIES, SIZES } from "@/styles/theme";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: ${SIZES["5"]};

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    align-items: flex-start;
    gap: ${SIZES["1.25"]};
    padding-bottom: ${SIZES["3"]};
  }
  & a {
    display: none;

    @media ${QUERIES.phoneAndSmaller} {
      display: revert;
    }
  }
`;

const headingCharReveal = keyframes`
 0% {
    opacity: 0;

  }

  100% {
    opacity: 1;
  }
`;

export const Lead = styled.h1`
  font-size: clamp(2rem, 3vw + 2rem, 8rem);
  color: #fff;
  user-select: none;
  text-shadow:
    -1px 0 0 #0dcaf0,
    1px 1px 0 rgb(239, 9, 105),
    0px 1px 0 rgb(91, 48, 246);
  transition: text-shadow 0.2s ease-in-out;
  font-family: "Teko", sans-serif;
  text-transform: uppercase;
  line-height: ${SIZES["4"]};
  max-width: 580px;
  @media ${QUERIES.tabletAndSmaller} {
    line-height: 40px;
    text-shadow: none;
  }

  span {
    pointer-events: none;
    color: #f2f2f2;
    user-select: none;
  }
`;

export const HeadingChar = styled.span`
  opacity: 0;
  animation: ${headingCharReveal} 2.8s cubic-bezier(0.7, 0, 0.2, 1) forwards;
`;

export const BasedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${SIZES["1"]};

  @media ${QUERIES.tabletAndSmaller} {
    padding-bottom: ${SIZES["2"]};
  }
`;

export const HeadingLeft = styled.p`
  font-size: ${SIZES["2"]};
  font-family: "Teko", sans-serif;
  text-transform: uppercase;
  color: #f2f2f2;
  font-weight: bold;
`;
