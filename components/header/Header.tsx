"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
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
      className={`fixed top-0 left-0 w-full h-16 z-[999] shadow flex items-center justify-between px-4 sm:px-6 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      } bg-[var(--background-primary)] shadow`}
    >
      <Logo onClick={scrollTop} height={90} width={45} />

      <ul className="hidden md:flex text-sm text-white gap-6 mr-6">
        {Menu.map((item, index) => (
          <li key={index} className={`${pathname === item.href ? "text-[#caa74d]" : "text-white"}`}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <button onClick={() => setOpen(!open)} className="md:hidden text-white text-3xl">
        ☰
      </button>

        {open && (
          <div className="absolute top-16 right-0 w-48 bg-black/90 border border-white/10 rounded-lg p-4 md:hidden">
            <ul className="flex flex-col gap-3 text-white text-sm">
              {Menu.map((item, index) => (
                <li
                  key={index}
                  className={`${pathname === item.href ? "text-[#caa74d]" : "text-white"}`}
                >
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

    </header>
  );
}
