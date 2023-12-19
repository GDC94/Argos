"use client";
import { useEffect, useState } from "react";

import { Layout } from "@/components/commons/LayoutClient";
import FrontPage from "@/components/pages/FrontPage";
import { PreLoader } from "@/components/commons/Preloader";

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
