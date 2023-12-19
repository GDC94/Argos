import Flag from "@/components/Flag";

import { PreloaderOverlay, WrapperText } from "./PreLoader.styles";

export function PreLoader({ siteLoaded }: { siteLoaded: boolean }) {
  return (
    <PreloaderOverlay loaded={siteLoaded}>
      <WrapperText>
        <Flag />
      </WrapperText>
    </PreloaderOverlay>
  );
}

export default PreLoader;
