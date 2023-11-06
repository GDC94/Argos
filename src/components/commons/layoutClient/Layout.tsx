import React from "react";

import GlobalStyles from "@/components/globalStyles";

import { LayoutContainer, LayoutWrapper } from "./Layout.styles";

export interface LayoutProps {
  children?: React.ReactNode;
  full?: boolean;
}

export function Layout({ children, full }: LayoutProps) {
  return (
    <LayoutContainer>
      <GlobalStyles />
      <LayoutWrapper>
        {children}
        {!full && <h2>footer</h2>}
      </LayoutWrapper>
    </LayoutContainer>
  );
}
