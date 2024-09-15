import React, { useState} from "react";
import Header from "@/components/layout/header";
import { useSidebar } from "@/hooks/useSidebar";
import Sidebar from "@/components/layout/sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, toggle } = useSidebar();
  const [status, setStatus] = useState(false);
    const handleToggle = () => {
      setStatus(true);
      toggle();
      setTimeout(() => setStatus(false), 500);
    };
    return (
        <>
            <Header toggleSidebar={handleToggle}/>
            <div className="flex h-screen border-collapse overflow-hidden">
                <Sidebar status={status} handleToggle={handleToggle} isOpen={isOpen}/>
                <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 bg-secondary/10 pb-1">
                    {children}
                </main>
            </div>
        </>
    );
};