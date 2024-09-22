import { Card } from "@/components/ui/card";
import { CircleUserRound } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { SiRumble, SiYoutube } from "react-icons/si";
import Link from "next/link";

export interface VideoCardProps {
  thumbnail: string;
  profileImg: string;
  title: string;
  vid: string;
}

export function VideoCard({ thumbnail, profileImg, title, vid }: VideoCardProps) {
  return (
    <Link href={`/video/${vid}`}>
      <Card className="relative">
        <img className="rounded-lg w-full" src={thumbnail} alt="" />
        <div className="absolute bottom-2 left-2">
          <SiRumble color="green" className="h-6 w-6" />
          {
            //<SiYoutube color="red" className="h-6 w-6" />
          }
        </div>
      </Card>
      <span className="flex gap-5 pt-5">
        <span>
          <Avatar className="h-6 w-6">
            <AvatarImage src={profileImg} />
            <AvatarFallback>
              <CircleUserRound className="absolute h-6 w-6" />
            </AvatarFallback>
          </Avatar>
        </span>
        <span className="flex flex-column max-h-12 text-ellipsis overflow-hidden">
          {title}
        </span>
      </span>
    </Link>
  )
}