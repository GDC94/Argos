import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { QUERIES, SIZES } from "@/styles/theme";

const headingCharReveal = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${SIZES["3"]};
  width: 100%;
  animation: ${headingCharReveal} 4s cubic-bezier(0.7, 0, 0.2, 1) forwards;
  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

export const LeftContent = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${QUERIES.laptopAndSmaller} {
    width: 100%;
  }
  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
  }
`;

export const RightContent = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: ${SIZES["2"]};
  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
  }
`;

export const LogoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${QUERIES.tabletAndSmaller} {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const TagsContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tag = styled.h3`
  font-size: ${SIZES["1"]};
  color: white;
`;

export const FreelanceTags = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
  & svg {
    margin-right: ${SIZES["2"]};
  }

  & p {
    margin-left: ${SIZES["0.5"]};
  }
`;

export const TechnologiesContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${SIZES["3"]};
  & p {
    color: #fff;
    font-weight: 600;
  }

  @media ${QUERIES.laptopAndSmaller} {
    display: none;
  }
`;

export const TechnologyTag = styled.p`
  font-size: ${SIZES["0.875"]};
  color: #fff;
  font-weight: bold;
`;
