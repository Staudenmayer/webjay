import {
    Card
  } from "@/components/ui/card";
import { CircleUserRound } from "lucide-react";

export interface VideoCardProps {
    thumbnail: string;
    profileImg: string;
    title: string;
}

export function VideoCard({thumbnail, profileImg, title}: VideoCardProps) {
    return (
        <div>
          <Card>
            <img className="rounded-lg" src={thumbnail} alt="" />  
          </Card>
          <span className="flex gap-5 pt-5">
            <span>
              <CircleUserRound className="h-6 w-6"/>
            </span>
            <span className="flex flex-column max-h-12 text-ellipsis overflow-hidden">
              {title}
            </span>
          </span>
        </div>
    )
}