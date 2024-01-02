/* eslint-disable react/function-component-definition */

import { Linked, StyledLink } from "./Button.styles";

interface ActionButtonProps {
  to: string;
  external?: string;
  children?: React.ReactNode | string;
}

function ActionButton({ to, external, children }: ActionButtonProps) {
  return (
    <Linked href={to}>
      <StyledLink target={external ?? "_blank"}>
        {children}
        <i className="fa-sharp fa-solid fa-arrow-right-long fa-lg" />
      </StyledLink>
    </Linked>
  );
}

export default ActionButton;
