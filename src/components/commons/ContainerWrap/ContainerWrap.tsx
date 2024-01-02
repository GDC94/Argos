import classes from "@/utils/classes";

import { Container } from "./ContainerWrap.styles";

interface ContainerWrap {
  children: React.ReactNode;
  className?: string;
}

function ContainerWrap({ children, className }: ContainerWrap) {
  return <Container className={classes(className)}>{children}</Container>;
}

export default ContainerWrap;
