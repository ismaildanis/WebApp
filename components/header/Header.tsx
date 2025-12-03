"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const Menu = [
    { name: "Anasayfa" },
    { name: "Hakkımızda" },
    { name: "Ürünler" },
    { name: "İletişim" },
  ];
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const scroller = document.getElementById("main-scroller");

    if (!scroller) return;
    const handleScroll = () => {
      if (scroller.scrollTop > window.innerHeight - 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    scroller.addEventListener("scroll", handleScroll);

    return () => scroller.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop  = () => {
    const scroller = document.getElementById("main-scroller");
    scroller?.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <header
      className={`fixed flex justify-between items-center top-0 left-0 w-full z-[999] transition-all duration-500
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
      bg-white shadow`}
    >
      <Link className="h-16 px-10 py-5 cursor-pointer" href="/" onClick={scrollTop}>
        <div className="text-xl text-black font-bold">MetalWeb</div>
      </Link>

      <div>
        <ul className="flex text-xs sm:text-sm text-black md:gap-5 md:px-7 sm:mr-8 md:mr-10">
          {Menu.map((i, index) => (
            <li key={index}> 
              <Link href="#">{i.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
