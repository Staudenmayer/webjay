import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface videoPageParams {
  params: {
    vid: string;
  }
}

export default function vid({ params }: videoPageParams) {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-5 content-center items-center align-center p-5 w-[1280px]">
        <img className="rounded-lg h-[720px] " src="https://placehold.co/1280x720"></img>
        <div className="w-full">Description</div>
        <Tabs defaultValue="platform">
          <TabsList>
            <TabsTrigger value="platform">Platform</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
          </TabsList>
          <TabsContent value="platform">Make changes to your account here.</TabsContent>
          <TabsContent value="recommended">
            Recommendations
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}