import { VideoCard, type VideoCardProps } from "@/components/layout/video-card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SubscriptionDialog } from "@/components/subscriptions/subscription-dialog";


let videos: Array<VideoCardProps> = [];
let avatars: Array<{src: string, fallback: string}> = [];

//import { Badge } from "@/components/ui/badge";
//let badges: Array<string> = ['Videos', 'Posts', 'Live', 'Planned', 'Watched'];
//<div className="flex flex-row gap-2 pb-4 overflow-x-auto ">
//{
//  badges.map((el, index) => {
//    return (
//      <Badge key={index} className="bg-sky-500 min-w-[4em] min-w-fittext-ellipsis overflow-hidden rounded-md cursor-pointer">{ el }</Badge>
//    )
//  })
//}
//</div>

for(let i = 0; i < 10; i++) {
    videos.push({
      thumbnail:"https://placehold.co/640x360",
       title:"Lorem Ipsum dolor",
       profileImg:"https://placehold.co/640x360"
    })
    avatars.push({src: 'https://github.com/shadcn.png', fallback: `a${i}`})
  }

export default function Subscriptions() {
    return(
        <div className="flex h-full flex-col">
            <div className="flex-1 p-8 pt-4">
              <div className="flex gap-2 overflow-x-auto ">
                {
                  avatars.map(({src, fallback}, index) => {
                    return (
                      <Avatar key={index} className="mb-4">
                        <AvatarImage src={src} />
                        <AvatarFallback>{ fallback }</AvatarFallback>
                      </Avatar>
                    )
                  })
                }
              </div>
              <div className="flex gap-2 overflow-x-auto ">
                {
                  Array.from(Array(10).keys()).map((el, index) => {
                    return (
                      <Button key={index} className="border rounded-xl mb-4 min-w-[4em] min-h-[4em] text-center text-ellipsis overflow-hidden bg-sky-500">
                        Test
                      </Button>
                    )
                  })
                }
                <SubscriptionDialog>
                  <Button className="p-5 border rounded-xl mb-4 min-w-[4em] min-h-[4em] text-center text-ellipsis overflow-hidden bg-sky-500">
                    <Plus className="h-6 w-6"/>
                  </Button>
                </SubscriptionDialog>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6 pt-2">
                  {
                    videos.map((el, index) => {
                      return (
                        <VideoCard key={index} thumbnail={ el.thumbnail } title={ el.title } profileImg={ el.profileImg }/>
                      )
                    })
                  }
              </div>
            </div>
        </div>
    )
}