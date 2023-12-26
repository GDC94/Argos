/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled, { css } from "styled-components";

interface PreloaderProps {
  loaded: boolean;
}

export const PreloaderOverlay = styled.div<PreloaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #010012;
  z-index: 9999;
  transition: all 2s cubic-bezier(0.3, 0, 0, 1);
  transform: translateX(0) translateZ(0);
  backface-visibility: hidden;

  ${({ loaded }) =>
    loaded &&
    css`
      pointer-events: none;
      transform: translateX(-100%) translateZ(0);
    `}
`;

export const WrapperText = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
