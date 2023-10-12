import { motion } from "framer-motion";
import { navLinks } from "../../utils/constants";
import { Link } from "react-router-dom";

// Variants for mobile navbar
const variants = {
  appear: {
    opacity: 0,
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 60,
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 60,
    },
  },
  closed: {
    opacity: 0,
    x: "-100%",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

// Variants for mobile navigation menu
const menuVariants = {
  appear: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

// Variants for mobile menu-items
const linkVariants = {
  appear: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

// Framer Motion swipe power
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const MobieMenu = ({ toggle }) => {
  return (
    <motion.div
      initial="appear"
      animate="open"
      exit="closed"
      variants={variants}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={{ left: 1, right: 0 }}
      dragMomentum={false}
      dragTransition={{ delay: -0.5 }}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);
        const isLeftDirection = offset.x < -45 && velocity.x <= 0;
        if (swipe < -swipeConfidenceThreshold || isLeftDirection) {
          toggle();
        }
      }}
      className="h-screen w-60 absolute top-0 left-0 bg-white p-4"
    >
      <motion.ul
        variants={menuVariants}
        className="flex flex-col gap-4 my-12 text-secondary"
      >
        {navLinks.map((link) => (
          <motion.li
            key={link.title}
            variants={linkVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to={link.url}>{link.title}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default MobieMenu;
