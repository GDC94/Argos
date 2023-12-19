"use client";

import { useEffect, useState } from "react";

function WebGlAnimatedBackground() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

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

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Agregar event listener para manejar cambios en el tamaño de la ventana
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener cuando el componente se desmonta
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Se ejecuta solo una vez, equivalente a componentDidMount

  return (
    <>
      {" "}
      <canvas
        id="hero-canvas"
        className="heroClasses"
        width={windowSize.width}
        height={windowSize.height}
      />
    </>
  );
}

export default WebGlAnimatedBackground;
