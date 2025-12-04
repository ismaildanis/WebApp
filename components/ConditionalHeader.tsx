"use client";
import { usePathname } from "next/navigation";
import HeaderLayout from "./Header";

export default function ConditionalHeader() {
  const pathname = usePathname();
  const showHeader = pathname !== "/";

  if (!showHeader) return null;
  return <HeaderLayout />;
}