import { Wrapper } from "./VisuallyHidden.styles";

interface VisuallyHiddenProps {
  children: React.ReactNode;
}

function VisuallyHidden({ children, ...delegated }: VisuallyHiddenProps) {
  return <Wrapper {...delegated}>{children}</Wrapper>;
}

export default VisuallyHidden;
