import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import { SIZES } from "@/styles/theme";

const ping = keyframes`
    80%, to {
      opacity: 0;
      transform: scale(3);
    }
  `;

export const Wrapper = styled.div`
  display: inline-block;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: #1bbe8d;
  margin-right: ${SIZES["0.5"]};
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #1bbe8d;
    opacity: 0.5;
    animation: ${ping} 2s cubic-bezier(0, 0, 0.5, 1) infinite;
  }
`;
