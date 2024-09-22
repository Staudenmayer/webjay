import { Button } from "../ui/button";
import { CircleUserRound } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Moon, Sun, Settings, LogIn, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { signIn, signOut, useSession } from "next-auth/react"

export function Profile() {
    const { setTheme, theme } = useTheme();
    const session = useSession();
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                variant="ghost"
                size="icon"
                onClick={() => {}}
                className="group relative flex h-12 w-12 justify-middle"
                > 
                    <Avatar className="h-6 w-6">
                        <AvatarImage src={session?.data?.user.image as string | undefined} />
                        <AvatarFallback>
                            <CircleUserRound className="absolute h-6 w-6"/> 
                        </AvatarFallback>
                    </Avatar>
                        
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="w-full justify-start gap-2 pl-5 pr-5"
                >
                    <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />

                    <span >Toggle theme</span>
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {}}
                    className="w-full justify-start gap-2 pl-5 pr-5"
                >
                    <Settings className="h-6 w-6 rotate-0 scale-100 " />
                    <span >Settings</span>
                </Button>
                <Button
                            variant="ghost"
                            size="icon"
                            className="w-full justify-start gap-2 pl-5 pr-5"
                            onClick={() => {session?.data ? signOut() : signIn()}}
                        >
                        {
                            session?.data ? <LogOut className="h-6 w-6 rotate-0 scale-100 " /> : <LogIn className="h-6 w-6 rotate-0 scale-100 " />
                        }
                        {
                            session?.data ? "Sign out" : "Sign In"
                        }
                        </Button>
            </PopoverContent>
        </Popover>
    )
}