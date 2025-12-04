"use client";
import { usePathname } from "next/navigation";
import InfoBanner from "@/components/InfoBanner";

export default function ConditionalBanner() {
  const pathname = usePathname();
  const showHeader = pathname !== "/";

  if (!showHeader) return null;
  return <InfoBanner />;
}