"use client";

import { Layout } from "@/components/commons/layoutClient";

export default function MainLayout({
  children,
  full,
}: {
  children: React.ReactNode;
  full?: boolean;
}) {
  return <Layout full={full}>{children}</Layout>;
}
