import { Button } from "../ui/button";
import { Cast as CastIcon } from "lucide-react";

export function Cast() {
    return(
        <Button
            variant="ghost"
            size="icon"
            onClick={() => {}}
            className="group relative flex h-12 w-12 justify-middle"
        >
            <CastIcon className="absolute h-6 w-6 "/>
        </Button>
    )
}