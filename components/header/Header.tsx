"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scroller = document.getElementById("main-scroller");

    if (!scroller) return;

    const handleScroll = () => {
      if (scroller.scrollTop > window.innerHeight - 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    scroller.addEventListener("scroll", handleScroll);

    return () => scroller.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
      bg-white shadow`}
    >
      <div className="h-16 px-6 flex items-center justify-between max-w-[1800px] mx-auto">
        <div className="text-xl font-bold">MetalWeb</div>
      </div>
    </header>
  );
}
