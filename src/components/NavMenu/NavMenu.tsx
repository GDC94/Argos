/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-console */
import type { SetStateAction } from "react";

import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

import classes from "@/utils/classes";

import { LinkNav, NavContainer, NavIcon, NavIconLine, NavLinks } from "./NavMenu.styles";

export function NavMenu() {
  const { width: windowWidth } = useWindowSize();
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: {
      clientX: SetStateAction<number>;
      clientY: SetStateAction<number>;
    }) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const [navOpen, setNavOpen] = useState<boolean>(false);

  useEffect(() => {
    if (windowWidth !== null && typeof windowWidth === "number") {
      setNavOpen(y < 170 && x > Math.min(windowWidth / 2, windowWidth - 800));
    }
  }, [x, y, windowWidth]);

  return (
    <NavContainer open={navOpen} className={classes({ navOpen })}>
      <NavIcon className={classes({ navOpen })} open={navOpen}>
        <NavIconLine open={navOpen} />
        <NavIconLine open={navOpen} />
        <NavIconLine open={navOpen} />
      </NavIcon>
      <NavLinks open={navOpen}>
        <LinkNav>german </LinkNav>
        <LinkNav>derbes </LinkNav>
        <LinkNav>catoni</LinkNav>
      </NavLinks>
    </NavContainer>
  );
}

export default NavMenu;
