import { PreloaderOverlay, WrapperText } from "./PreLoader.styles";

export function PreLoader({ siteLoaded }: { siteLoaded: boolean }) {
  return (
    <PreloaderOverlay loaded={siteLoaded}>
      <WrapperText />
    </PreloaderOverlay>
  );
}

export default PreLoader;
