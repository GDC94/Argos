import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const oscillate = keyframes`
  from {
    transform: translateY(3px);
  }
  to {
    transform: translateY(-3px);
  }
`;

export const Flag = styled.div`
  display: flex;
  aspect-ratio: 3 / 2;
  width: clamp(3rem, 2vw + 2rem, 3rem);
`;

export const FlagWrapper = styled.div`
  flex: 1;
  background: linear-gradient(
    to bottom,
    hsl(200deg 85% 70%) 0%,
    hsl(200deg 85% 70%) 20%,
    hsl(200deg 85% 70%) 20%,
    hsl(200deg 85% 70%) 30%,
    hsl(0deg 0% 100%) 20%,

    hsl(0deg 0% 100%) 70%,

    hsl(200deg 85% 70%) 70%,
    hsl(200deg 85% 70%) 80%,
    hsl(200deg 85% 70%) 80%,
    hsl(200deg 85% 70%) 100%
  );
  animation: ${oscillate} 500ms infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-fill-mode: backwards;
`;
