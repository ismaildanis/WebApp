"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../Logo";

export default function Header() {
  const router = useRouter();
  const Menu = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Ürünler", href: "/urunler" },
    { name: "İletişim", href: "/iletisim" },
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
      className={`fixed flex justify-between items-center top-0 left-0 w-full z-[999] transition-all duration-500 h-16 w-full ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      } bg-[var(--background-primary)] shadow`}
    >
      <Logo onClick={scrollTop} height={100} width={48} />

      <ul className="flex text-xs sm:text-sm text-white md:gap-5 md:px-7 sm:mr-8 md:mr-10">
        {Menu.map((i) => (
          <li key={i.href}>
            <Link href={i.href}>{i.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
