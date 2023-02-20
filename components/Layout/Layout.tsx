import React from "react";
import Navbar from "@p2p/components/NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full min-h-screen bg-[#2A2A2E] z-0">
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
