"use client";

import { usePathname } from "next/navigation";
import Visual from "@/app/components/Visual";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isRoot = pathname === "/";

  return (
    <>
      {isRoot && <Visual />}
      <main className={isRoot ? "main" : "main sub-page"}>
        {children}
      </main>
    </>
  );
}
