import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseEnter);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
    },
  };

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8"
        animate={isHovering ? "hover" : "default"}
        variants={variants}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}>
        <div className="relative h-full w-full">
          <div className="absolute inset-0 rounded-full border-2 border-primary-500 opacity-25" />
          <div className="absolute inset-2 rounded-full bg-primary-500 opacity-25" />
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
