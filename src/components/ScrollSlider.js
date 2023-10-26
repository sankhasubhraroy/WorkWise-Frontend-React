import { useEffect, useRef, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollSlider = ({ minDisplay = 1, children }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const { scrollY } = useScroll();
  const springScrollY = useSpring(scrollY);
  const [x, setX] = useState(0);

  // State for number of slides to show
  const [slidesToShow, setSlidesToShow] = useState(0);
  // Variables for different screen sizes
  const isExtraLargeScreen = useMediaQuery("(min-width: 1280px)");
  const isLargeScreen = useMediaQuery("(max-width: 1280px)");
  const isDesktop = useMediaQuery("(max-width: 1024px)");
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 640px)");

  // Set number of slides to show depending on screen size on mount
  useEffect(() => {
    if (isExtraLargeScreen) setSlidesToShow(5);
    if (isLargeScreen) setSlidesToShow(5);
    if (isDesktop) setSlidesToShow(minDisplay + 2);
    if (isTablet) setSlidesToShow(minDisplay + 1);
    if (isMobile) setSlidesToShow(minDisplay);
  }, [
    isExtraLargeScreen,
    isLargeScreen,
    isDesktop,
    isTablet,
    isMobile,
    minDisplay,
  ]);

  // Calculating the width difference between container and tracker
  useEffect(() => {
    const calcX = () => {
      if (containerRef.current.offsetWidth >= trackRef.current.offsetWidth) {
        setX(0);
      } else {
        setX(trackRef.current.offsetWidth - containerRef.current.offsetWidth);
      }
    };

    // Initially running the function
    calcX();
    // Run everytime window get resized
    window.addEventListener("resize", calcX);

    // Removing the event upon unmounting
    return () => window.removeEventListener("resize", calcX);
  }, [slidesToShow]);

  // Amount of width should be on transition during scrolling
  const transX = useTransform(springScrollY, [40, 440], [0, -x]);

  // Styles for carousel and slides
  const trackStyle = {
    width: `${children.length * (100 / slidesToShow)}%`,
    x: transX,
  };

  const slideStyle = {
    width: `${100 / slidesToShow}%`,
  };

  return (
    <div ref={containerRef} className="CONTAINER overflow-hidden">
      <motion.div
        ref={trackRef}
        className="TRACK flex m-auto"
        style={trackStyle}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="SLIDE flex justify-center"
            style={slideStyle}
          >
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollSlider;
