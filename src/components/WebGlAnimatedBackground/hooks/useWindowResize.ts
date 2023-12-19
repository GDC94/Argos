import { useEffect, useState } from "react";

function useWindowOnFocus() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

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

  return { width: windowSize.width, height: windowSize.height };
}

export default useWindowOnFocus;
