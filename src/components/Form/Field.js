import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const labelVariants = {
  rest: {
    opacity: 0.4,
    top: 9,
    left: 20,
  },
  active: {
    opacity: 1,
    top: -25,
    left: 20,
    fontSize: "14px",
  },
};

const Field = ({ label, type, name, value = "", onChange }) => {
  const id = label?.replace(" ", "-").toLowerCase();
  const [isActive, setIsActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (value) setIsActive(true);
  }, [value]);

  // Function to make animation active when input is focused
  const handleFocus = () => {
    setIsActive(true);
  };

  // Function to make animations inactive when input is out of focus and empty
  const handleBlur = () => {
    if (value === "") {
      setIsActive(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative my-8">
      <motion.label
        htmlFor={id}
        initial={false}
        animate={isActive ? "active" : "rest"}
        variants={labelVariants}
        className="capitalize text-secondary absolute"
      >
        {label}
      </motion.label>

      {type !== "textarea" && (
        <input
          id={id}
          type={showPassword ? "text" : type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="outline-none px-4 py-2 rounded-full w-full"
        />
      )}

      {type === "textarea" && (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="resize-none outline-none px-4 py-2 rounded-full w-full"
        ></textarea>
      )}

      {type === "password" && (
        <button
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-3 text-secondary"
        >
          {showPassword ? <VscEye /> : <VscEyeClosed />}
        </button>
      )}
    </div>
  );
};

export default Field;
