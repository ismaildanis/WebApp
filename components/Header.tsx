"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GradientText from "./Gradient"
import Logo from "./Logo";

export default function HeaderLayout() {
    const pathname = usePathname();

    const Menu = [
        { name: "Anasayfa", href: "/" },
        { name: "Hakkımızda", href: "/hakkimizda" },
        { name: "Ürünler", href: "/urunler" },
        { name: "İletişim", href: "/iletisim" },
    ];

    return (
    <header className="fixed top-6 left-0 w-full h-16 z-[999] flex items-center justify-between bg-[var(--secondary)] shadow">

        <Logo  height={100} width={48} />

        <div>
            <ul className="flex text-xs sm:text-sm text-white md:gap-5 md:px-7 sm:mr-8 md:mr-10">
            {Menu.map((i, index) => (
                <li key={index} className={`${pathname === i.href ? "text-black" : "text-white"}`}> 
                <Link href={i.href}>{i.name}</Link>
                </li>
            ))}
            </ul>
        </div>
        </header>
    );
}
