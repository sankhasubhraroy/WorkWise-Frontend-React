import { motion } from "framer-motion";

const Button = ({
  icon,
  text,
  color,
  background,
  hover,
  border,
  borderColor,
  padding,
  onClick,
  advance = false,
}) => {
  return !advance ? (
    <motion.button
      onClick={onClick}
      whileHover={{ background: hover }}
      className={`rounded-full flex gap-2 justify-center items-center w-max capitalize 
      ${border && "border-2"} ${padding && "px-4 py-2"}`}
      style={{ color, background, borderColor }}
    >
      {icon}
      {text}
    </motion.button>
  ) : (
    <motion.button
      onClick={onClick}
      whileHover={{ background: hover }}
      className={`rounded-full flex gap-2 justify-between items-center w-full capitalize
      ${border && "border-2"} ${padding && "px-8 py-3"}`}
      style={{ color, background, borderColor }}
    >
      <div>{icon}</div>
      <p className="flex-grow text-center">{text}</p>
    </motion.button>
  );
};

export default Button;
