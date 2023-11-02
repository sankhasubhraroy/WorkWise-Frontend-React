import { motion } from "framer-motion";

const Loader = () => {
  return (
    <main className="LOADER fixed inset-0 bg-white z-10 flex justify-center items-center">
      <div className="SPINNER relative w-14 h-14 flex justify-center items-center">
        <motion.div
          animate={{
            width: ["0%", "44%", "88%"],
            height: ["0%", "44%", "88%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
            repeat: Infinity,
            times: [0, 0.333, 1],
          }}
          className="border-3.5 border-pale-purple rounded-full absolute"
        ></motion.div>

        <motion.div
          animate={{
            width: ["0%", "44%", "88%"],
            height: ["0%", "44%", "88%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: 1,
            ease: "easeOut",
            repeat: Infinity,
            times: [0, 0.333, 1],
          }}
          className="border-3.5 border-pale-purple rounded-full absolute"
        ></motion.div>
      </div>
    </main>
  );
};

export default Loader;
