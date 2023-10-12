import { motion } from "framer-motion";

// Variants for backdrop
const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.5 } },
};

const Backdrop = ({ toggle }) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      onClick={toggle}
      className="absolute h-screen w-full bg-backdrop top-0 left-0"
    ></motion.div>
  );
};

export default Backdrop;
