import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className="MODAL-BACKDROP fixed z-[1] inset-0 bg-backdrop flex justify-center items-center overflow-auto"
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
