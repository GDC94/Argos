import type { Metadata } from "next";

import { GeistSans } from "geist/font";

import "./globals.css";

export const metadata: Metadata = {
  title: "GDC - Portfolio",
  description: "Next Js 14",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={GeistSans.className} lang="en">
      <body>{children}</body>
    </html>
  );
}
