import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#111111] min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
