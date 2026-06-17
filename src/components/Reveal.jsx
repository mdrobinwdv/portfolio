import { motion } from "framer-motion";

function Reveal({ children, direction = "up" }) {
  const getDirection = () => {
    switch (direction) {
      case "left":
        return { x: -100 };
      case "right":
        return { x: 100 };
      case "down":
        return { y: -100 };
      default:
        return { y: 100 };
    }
  };

  return (
    <motion.div
      className="w-full flex justify-center"
      initial={{
        opacity: 0,
        ...getDirection(),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;