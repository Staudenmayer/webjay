
import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import Link from "next/link";
import { Bird, Menu } from "lucide-react";
import { Profile } from "./profile";
import { Cast } from "./cast";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { Session } from "next-auth";


interface HeaderProps {
    toggleSidebar: () => void;
}

const title = 'Webjay'

export default function Header({ toggleSidebar }: HeaderProps) {
    return (
        <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
            <nav className="flex h-16 items-center justify-between px-2">
                <div className="flex gap-5">
                    <Button variant="ghost" className="group relative flex h-12 justify-start" onClick={toggleSidebar}>
                        <Menu className="h-6 w-6" />
                    </Button>
                    <Link
                        href={"/"}
                        className="hidden items-center justify-between gap-2 md:flex"
                    >
                        <Bird className="h-6 w-6" />
                        <h1 className="text-lg font-semibold">{ title }</h1>
                    </Link>
                </div>
                <div className={cn("block md:!hidden")}>
                    <MobileSidebar title={ title }/>
                </div>
                <div className="flex items-center gap-2 w-1/4">
                    <Input placeholder="Search" />
                        <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {}}
                        className="h-9 w-9"
                        >
                            <Search className="h-6 w-6"/>
                        </Button>
                </div>
                <div className="flex items-center">
                    {/*
                    <ThemeToggle />
                    */}
                    <Cast />
                    <Profile/>
                </div>
            </nav>
        </div>
    );
}