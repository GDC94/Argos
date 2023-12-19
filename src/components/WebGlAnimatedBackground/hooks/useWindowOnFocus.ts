import { useEffect, useState } from "react";

function useWindowOnFocus() {
  const [windowFocused, setWindowFocused] = useState(
    typeof window !== "undefined" ? document.hasFocus() : false,
  );

  useEffect(() => {
    const handleFocus = () => {
      setWindowFocused(true);
    };

    const handleBlur = () => {
      setWindowFocused(false);
    };

    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  return { windowFocused };
}

export default useWindowOnFocus;
