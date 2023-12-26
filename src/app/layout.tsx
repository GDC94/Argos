/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";

import localFont from "next/font/local";

import ThemeClient from "@/components/commons/ThemeClient";

import StyledComponentsRegistry from "./lib/registry";

export const metadata: Metadata = {
  title: "GDC - Portfolio",
  description: "Next Js 14",
};

const tanker = localFont({ src: "./fonts/national.otf" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={tanker.className}>
      <head>
        {/* Favicon */}

        {/*OpenGraph metadata*/}
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="German Derbes Catoni | Front-end dev" />
        <meta
          property="og:description"
          content="German Derbes Catoni, I'm a front end developer."
        />

        {/* HTML Meta Tags */}
        <meta name="description" content="German Derbes Catoni, I'm a front end developer." />

        {/*  Google / Search Engine Tags */}
        <meta itemProp="name" content=" German Derbes Catoni| Front-end dev" />
        <meta itemProp="description" content="German Derbes Catoni, I'm a front end developer." />

        {/* Facebook Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="German Derbes Catoni | Front-end dev" />
        <meta
          property="og:description"
          content="German Derbes Catoni, I'm a front end developer."
        />

        {/* Twitter Meta Tags  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="German Derbes Catoni | Front-end dev" />
        <meta
          name="twitter:description"
          content="German Derbes Catoni, I'm a front end developer."
        />

        {/* Google font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=family=Inter:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <StyledComponentsRegistry>
        <ThemeClient>
          <body>{children}</body>
        </ThemeClient>
      </StyledComponentsRegistry>
    </html>
  );
}
