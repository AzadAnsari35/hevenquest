"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTop = ({ showDots = false }: { showDots?: boolean }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return showDots ? (
    <div
      style={{
        bottom: "5px",
        right: "55px",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s ease",
      }}
      className="rotating-dotted-border position-fixed"
    ></div>
  ) : (
    <button
      onClick={scrollToTop}
      className={`btn btn-primary position-fixed rounded-circle shadow dotted-border`}
      style={{
        bottom: "60px",
        right: "60px",
        zIndex: 1050,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 2s ease",
      }}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};
