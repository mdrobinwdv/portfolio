import { useEffect, useState } from "react";

function Cursorlight() {
  const [position, setPosition] = useState({x: 0 , y: 0,})
  useEffect(() => {
    const moveCursor = (e) => {
      setPosition(
        {
          x: e.clientX,
          y: e.clientY,
        }
      )
    };
    window.addEventListener("mousemove",moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  },[])

  return (
    <div
      className="fixed pointer-events-none z-50 w-40 h-40  rounded-full"
      style={{
        left: position.x - 80,
        top: position.y - 80,
        background:"radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)",
        filter: "blur(10px)",
      }}
    />
  );
}

export default Cursorlight;