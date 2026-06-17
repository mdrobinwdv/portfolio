import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 5);
    };

    // ⭐ FIX 1: disable browser scroll restore
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // ⭐ FIX 2: force scroll to top on refresh
    window.scrollTo(0, 0);

    // initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const value = {
    scroll,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default Authprovider;