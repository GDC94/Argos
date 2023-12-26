import classes from "@/utils/classes";

import { LinkNav, NavContainer, NavIcon, NavIconLine, NavLinks } from "./NavMenu.styles";
import useMouseNav from "./hooks/useMouseNav";

export function NavMenu() {
  const { isNavOpen } = useMouseNav();

  return (
    <NavContainer>
      <NavIcon className={classes({ isNavOpen })} open={isNavOpen}>
        <NavIconLine open={isNavOpen} />
        <NavIconLine open={isNavOpen} />
        <NavIconLine open={isNavOpen} />
      </NavIcon>
      <NavLinks open={isNavOpen}>
        <LinkNav>Home</LinkNav>
        <LinkNav>About </LinkNav>
        <LinkNav>Contact</LinkNav>
      </NavLinks>
    </NavContainer>
  );
}

export default NavMenu;
