import { createContext, useContext, useState, useEffect } from "react";

const ScreenContext = createContext();

export const ScreenContextProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenContext.Provider value={{ screenWidth, screenHeight }}>
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreenContext = () => {
  return useContext(ScreenContext);
};
