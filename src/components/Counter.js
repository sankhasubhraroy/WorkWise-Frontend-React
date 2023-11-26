import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ from = 0, to, duration = 3 }) => {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: duration });

      return controls.stop;
    }
  }, [count, to, duration, isInView]);

  return <motion.span ref={countRef}>{rounded}</motion.span>;
};

export default Counter;
