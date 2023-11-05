import type { Metadata } from "next";

import { GeistSans } from "geist/font";

import StyledComponentsRegistry from "./lib/registry";

export const metadata: Metadata = {
  title: "GDC - Portfolio",
  description: "Next Js 14",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={GeistSans.className} lang="en">
      <StyledComponentsRegistry>
        <body>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
