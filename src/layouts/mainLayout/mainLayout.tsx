import React from "react";

import GlobalStyles from "@/components/globalStyles";

import { LayoutContainer, LayoutWrapper } from "./mainLayout.styles";

export interface MainLayoutProps {
  children?: React.ReactNode;
  full?: boolean;
}

export function MainLayout({ children, full }: MainLayoutProps) {
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
