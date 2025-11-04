"use client";

import { useState, useEffect } from "react";

export default function FooterHover() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Si la souris est dans les 50px du bas, afficher le footer
      const windowHeight = window.innerHeight;
      if (e.clientY > windowHeight - 50) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <footer
      className={`fixed bottom-0 left-0 w-full bg-[var(--rose)] text-bg text-center text-sm md:text-base tracking-wide p-6 transition-transform duration-300 ${
        showFooter ? "translate-y-0" : "translate-y-full"
      }`}
    >
      © {new Date().getFullYear()} Cocoon Chic — Bubo - Tous droits réservés.
    </footer>
  );
}
