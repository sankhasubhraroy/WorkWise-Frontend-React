import { createContext, useContext, useEffect, useState } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [hasScrollbar, setHasScrollbar] = useState(false);

  useEffect(() => {
    const checkScrollbar = () => {
      const hasVerticalScrollbar =
        document.body.scrollHeight > window.innerHeight;
      const hasHorizontalScrollbar =
        document.body.scrollWidth > window.innerWidth;

      setHasScrollbar(hasVerticalScrollbar || hasHorizontalScrollbar);
    };

    checkScrollbar();

    window.addEventListener("resize", checkScrollbar);

    return () => {
      window.removeEventListener("resize", checkScrollbar);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ hasScrollbar }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  return useContext(ScrollContext);
};
