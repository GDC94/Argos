"use client";
import { useEffect, useState } from "react";

import { Layout } from "@/components/commons/LayoutClient";
import { PreLoader } from "@/components/commons/Preloader";
import FrontPage from "@/pages/FrontPage";

export default function MainLayout() {
  const [siteLoaded, setSiteLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setSiteLoaded(true);
    }, 1500);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <Layout full>
      <PreLoader siteLoaded={siteLoaded} />
      {siteLoaded ? <FrontPage /> : null}
    </Layout>
  );
}
