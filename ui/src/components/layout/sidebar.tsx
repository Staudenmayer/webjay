import React, { useState } from "react";
import { SideNav } from "@/components/layout/side-nav";
import { NavItems } from "@/components/constants/side-nav";

import { cn } from "@/lib/utils";
import { BsArrowLeftShort } from "react-icons/bs";

interface SidebarProps {
  className?: string;
  status: boolean;
  isOpen: boolean;
  handleToggle: () => void;
}

export default function Sidebar({ className, status, handleToggle, isOpen }: SidebarProps) {
  return (
    <nav
      className={cn(
        `relative hidden h-screen border-r pt-10 md:block`,
        status && "duration-500",
        isOpen ? "w-72" : "w-[78px]",
        className
      )}
    >
      
      <BsArrowLeftShort
        className={cn(
          "hidden absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground",
          !isOpen && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <SideNav
              className="text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100"
              items={NavItems}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
