import { useEffect, useState } from "react";

function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-50 w-52 h-52 rounded-full"
      style={{
        left: position.x - 100,
        top: position.y - 100,
        background:
          "radial-gradient(circle, rgba(59,130,246,.25) 0%, transparent 70%)",
        filter: "blur(30px)",
      }}
    />
  );
}

export default CursorGlow;