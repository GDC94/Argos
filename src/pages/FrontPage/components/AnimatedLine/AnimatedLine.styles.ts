import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { QUERIES } from "@/styles/theme";

const LoopingBorderAnimation = keyframes`
    0% {
      transform: translateX(0) scaleX(0);
      transform-origin: 0 center;
    }
    40% {
      transform: translateX(150px) scaleX(1);
      transform-origin: 50% center;
    }
    80% {
      width: 0;
      transform: translateX(300px) scaleX(0);
      transform-origin: 100% center;
    }
    100% {
      width: 0;
      transform: translateX(300px) scaleX(0);
      transform-origin: 100% center;
    }
  `;

export const AnimateContentIn = keyframes`
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `;

export const ScrollHintContainer = styled.a`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 20px;
  width: 300px;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  color: #f984ff;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 50px;
    height: 1px;
    background-color: #fff;
    display: block;
    animation: ${LoopingBorderAnimation} 2s linear infinite;
    transform-origin: 0 center;
  }

  span,
  i {
    pointer-events: none;
    opacity: 0;
    transform: translateY(20px);
    animation: ${AnimateContentIn} 1s ease-in-out forwards;
    animation-delay: 1s;
  }

  i {
    margin-left: 30px;
  }

  &:hover {
    cursor: pointer;
  }

  @media ${QUERIES.laptopAndSmaller} {
    display: none;
  }
`;
