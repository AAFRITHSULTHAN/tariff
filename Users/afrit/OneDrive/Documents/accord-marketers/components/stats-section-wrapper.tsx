"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import StatsSection from "./stats-section";

export default function StatsSectionWrapper() {
  const pathname = usePathname();
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (pathname === "/") {
      setKey((k) => k + 1);
    }
  }, [pathname]);

  return <StatsSection key={key} />;
} 