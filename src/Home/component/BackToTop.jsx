import { useEffect, useState } from "react";

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    show && (
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-5 right-5 z-50 bg-blue-600 text-white border border-white p-4 rounded-full shadow-2xl hover:scale-110 transition"
      >
        ↑
      </button>
    )
  );
}

export default BackToTop;