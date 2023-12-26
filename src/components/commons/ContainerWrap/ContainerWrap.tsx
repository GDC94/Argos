import classes from "@/utils/classes";

import { Container } from "./ContainerWrap.styles";

interface ContainerWrap {
  children: React.ReactNode;
  withBackground?: boolean;
  className?: string;
}

function ContainerWrap({ children, withBackground, className }: ContainerWrap) {
  return <Container className={classes(className, { withBackground })}>{children}</Container>;
}

export default ContainerWrap;
