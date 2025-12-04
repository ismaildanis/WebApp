"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ConditionalFooter() {
  const pathname = usePathname();
  const showHeader = pathname !== "/";

  if (!showHeader) return null;
  return <Footer />;
}