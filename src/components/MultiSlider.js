import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Variants for button animation
const navigationVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.9 },
  disable: { opacity: 0.5, y: "-50%", top: "50%" },
  active: { y: "-50%", top: "50%" },
};

const dotsVariants = {
  normal: { opacity: 0.6 },
  active: {
    width: 70,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  hover: { opacity: 0.9 },
};

// Swipe action declaration
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const MultiSlider = ({
  children,
  navigation = true,
  dots = true,
  minDisplay = 1,
}) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const controls = useAnimation();

  // State for current slide and direction
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIndex =
    ((currentSlide % children.length) + children.length) % children.length;

  // Function to switch slides on swipe
  const swipeSlide = (newDirection) => {
    setCurrentSlide((prevSlide) => prevSlide + newDirection);
  };

  // Function to calculate x position of track
  const calcX = (index) => {
    if (!trackRef.current) return 0;

    const slideWidth = trackRef.current.offsetWidth / children.length;
    return index * slideWidth;
  };

  // Function to update state after dragging
  const handleDragEnd = (e, { offset, velocity, point }) => {
    if (!trackRef.current || !containerRef.current) return;

    const swipe = swipePower(offset.x, velocity.x);
    const isRightDirection = offset.x > 45 && velocity.x >= 0;
    const isPointOkay = point.x !== 0 && point.y !== 0;
    const isLeftDirection = offset.x < -45 && velocity.x <= 0 && isPointOkay;

    const slideW = trackRef.current.offsetWidth / children.length;
    const carouselDiments = trackRef.current.getBoundingClientRect();
    const containerDiments = containerRef.current.getBoundingClientRect();

    const isPassedBoundaries =
      containerDiments.right > carouselDiments.right - slideW;

    let newSlideIndex = slideIndex;
    let swipeSlideBy = Math.ceil(-offset.x / slideW);

    if (swipe > swipeConfidenceThreshold || isRightDirection) {
      swipeSlideBy = swipeSlideBy - 1;

      newSlideIndex = slideIndex > 0 ? slideIndex + swipeSlideBy : slideIndex;
      if (newSlideIndex < 0) newSlideIndex = 0;

      const indexDiff = newSlideIndex - slideIndex;
      if (indexDiff < 0) {
        swipeSlideBy = indexDiff;
      }

      if (slideIndex > newSlideIndex) {
        swipeSlide(swipeSlideBy);
      }
    } else if (swipe > swipeConfidenceThreshold || isLeftDirection) {
      const lastIndex = children.length - 1;

      newSlideIndex =
        slideIndex < lastIndex ? slideIndex + swipeSlideBy : slideIndex;
      if (newSlideIndex > lastIndex) newSlideIndex = lastIndex;
      if (isPassedBoundaries) {
        const childrenOnScreen = Math.floor(
          containerRef.current.offsetWidth / slideW
        );
        newSlideIndex = children.length - childrenOnScreen;
      }

      const indexDiff = newSlideIndex - slideIndex;
      if (swipeSlideBy > indexDiff) {
        swipeSlideBy = indexDiff;
      }

      if (slideIndex < newSlideIndex) {
        swipeSlide(swipeSlideBy);
      }
    }

    // if carousel has passed the boundaries of a container
    if (isPassedBoundaries && slideIndex <= newSlideIndex) {
      const rightEdge =
        -trackRef.current.offsetWidth + containerRef.current.offsetWidth;

      controls.start({ x: rightEdge });
    } else {
      controls.start({ x: -calcX(newSlideIndex) });
    }
  };

  // State for number of slides to show
  const [slidesToShow, setSlidesToShow] = useState(0);

  // Function to switch slides on button click
  const switchSlideForwards = () => {
    if (slideIndex >= children.length - slidesToShow) return;
    setCurrentSlide((prevSlide) => prevSlide + 1);
    controls.start({ x: -calcX(slideIndex + 1) });
  };

  const switchSlideBackwards = () => {
    if (slideIndex <= 0) return;
    setCurrentSlide((prevSlide) => prevSlide - 1);
    controls.start({ x: -calcX(slideIndex - 1) });
  };

  const switchSlideTo = (index) => {
    setCurrentSlide(index);
    controls.start({ x: -calcX(index) });
  };

  // Variables for different screen sizes
  const isExtraLargeScreen = useMediaQuery("(min-width: 1280px)");
  const isLargeScreen = useMediaQuery("(max-width: 1280px)");
  const isDesktop = useMediaQuery("(max-width: 1024px)");
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 640px)");

  // Set number of slides to show depending on screen size on mount
  useEffect(() => {
    if (isExtraLargeScreen) setSlidesToShow(5);
    if (isLargeScreen) setSlidesToShow(4);
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

  // Styles for carousel and slides
  const trackStyle = {
    width: `${children.length * (100 / slidesToShow)}%`,
  };

  const slideStyle = {
    width: `${100 / slidesToShow}%`,
  };

  return (
    <div className="SLIDER relative">
      <div ref={containerRef} className="CONTAINER overflow-hidden">
        <motion.div
          ref={trackRef}
          animate={controls}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 300,
          }}
          drag="x"
          onDragEnd={handleDragEnd}
          dragConstraints={{ top: 0 }}
          dragElastic={1}
          style={trackStyle}
          className="TRACK flex m-auto"
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="SLIDE h-full flex justify-center px-4"
              style={slideStyle}
            >
              {child}
            </div>
          ))}
        </motion.div>
      </div>

      {navigation && (
        <motion.button
          variants={navigationVariants}
          initial="active"
          animate={
            slideIndex === children.length - slidesToShow ? "disable" : ""
          }
          whileHover={
            slideIndex < children.length - slidesToShow ? "hover" : ""
          }
          whileTap={slideIndex < children.length - slidesToShow ? "tap" : ""}
          className="NAVIGATION-NEXT absolute right-5 bg-black bg-opacity-30 text-primary rounded-full p-2"
          onClick={() => switchSlideForwards()}
        >
          <FiChevronRight size={28} />
        </motion.button>
      )}

      {navigation && (
        <motion.button
          variants={navigationVariants}
          initial="active"
          animate={slideIndex === 0 ? "disable" : ""}
          whileHover={slideIndex > 0 ? "hover" : ""}
          whileTap={slideIndex > 0 ? "tap" : ""}
          className="NAVIGATION-PREVIOUS absolute left-5 bg-black bg-opacity-30 text-primary rounded-full p-2"
          onClick={() => switchSlideBackwards()}
        >
          <FiChevronLeft size={28} />
        </motion.button>
      )}

      {dots && (
        <div className="DOTS absolute bottom-[-2rem] right-1/2 translate-x-1/2 flex justify-center items-center gap-2">
          {Array.from({ length: children.length - slidesToShow + 1 }).map(
            (_, index) => (
              <motion.button
                key={index}
                variants={dotsVariants}
                initial="normal"
                animate={slideIndex === index ? "active" : ""}
                whileHover={slideIndex !== index ? "hover" : ""}
                transition={{ duration: 0.2 }}
                className="h-3 w-3 bg-black bg-opacity-40 rounded-full"
                onClick={() => switchSlideTo(index)}
              ></motion.button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default MultiSlider;
