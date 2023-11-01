import { motion } from "framer-motion";
import { useModal } from "../../contexts/modalContext";
import { IoClose } from "react-icons/io5";
import Backdrop from "./Backdrop";

const modalVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.15,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.75,
    transition: {
      ease: "easeIn",
      duration: 0.15,
    },
  },
};

const Modal = () => {
  const { closeModal, modalContent } = useModal();

  return (
    <Backdrop onClick={closeModal}>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
        className="MODAL relative rounded-xl overflow-hidden"
      >
        {modalContent}

        <button
          onClick={closeModal}
          className="MODAL-CLOSE absolute top-2 right-2 rounded-full bg-pale-bluishGray"
        >
          <IoClose size={18} />
        </button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
