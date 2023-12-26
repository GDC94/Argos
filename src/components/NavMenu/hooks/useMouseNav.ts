import type { SetStateAction } from "react";

import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

export function useMouseNav() {
  const { width: windowWidth } = useWindowSize();
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [xPosition, setXPosition] = useState<number>(0);
  const [yPosition, setYPosition] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (event: {
      clientX: SetStateAction<number>;
      clientY: SetStateAction<number>;
    }) => {
      setXPosition(event.clientX);
      setYPosition(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (windowWidth !== null && typeof windowWidth === "number") {
      setIsNavOpen(yPosition < 90 && xPosition > Math.min(windowWidth / 2, windowWidth - 1300));
    }
  }, [xPosition, yPosition, windowWidth]);

  return { isNavOpen };
}

export default useMouseNav;
