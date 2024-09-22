import { Badge } from "@/components/ui/badge";
import { VideoCard, type VideoCardProps } from "@/components/layout/video-card";

let badges: Array<string> = ['Youtube', 'Rumble', 'Spotify', 'Odysee', 'BiliBili', 'Dailymotion'];
let videos: Array<VideoCardProps> = [];

for(let i = 0; i < 12; i++) {
  videos.push({
    thumbnail:"https://placehold.co/640x360",
    title:"Lorem Ipsum dolor",
    profileImg:"",
    vid: "a"+i
  })
}

export default function Home () {
    return (
        <div className="flex h-full flex-col">
          <div className="flex-1 p-8 pt-4">
            <div className="flex flex-row gap-2 pb-4 overflow-x-auto">
              {
                badges.map((el, index) => {
                  return (
                    <Badge key={index} className="bg-sky-500 min-w-[5em] text-ellipsis overflow-hidden rounded-md cursor-pointer">{ el }</Badge>
                  )
                })
              }
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
                {
                  videos.map((el, index) => {
                    return (
                      <VideoCard key={ el.vid } vid={ el.vid } thumbnail={ el.thumbnail } title={ el.title } profileImg={ el.profileImg }/>
                    )
                  })
                }
              </div>
          </div>
        </div>
      );
};