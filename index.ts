//https://gitlab.futo.org/videostreaming/plugins/youtube.git
import fs from "fs";
import vm from "vm";
import http from "./http";
import bridge from "./bridge";
import log from "./log";
import {
    source,
    Type,
    Language
} from "./var";
import {
    PlaybackTracker,
    VideoPager,
    VideoUrlRangeSource,
    AudioUrlRangeSource,
    RequestModifier,
    LiveEventPager,
    CommentPager,
    Comment,
    PlaylistPager,
    ChannelPager,
    FilterCapability
} from "./class";


interface source {
    enable(): void;
}
interface Globals {
    source: typeof source;
    Type: typeof Type;
    Language: typeof Language;
    PlaybackTracker: typeof PlaybackTracker;
    VideoPager: typeof VideoPager;
    VideoUrlRangeSource: typeof VideoUrlRangeSource;
    AudioUrlRangeSource: typeof AudioUrlRangeSource;
    RequestModifier: typeof RequestModifier;
    LiveEventPager: typeof LiveEventPager;
    CommentPager: typeof CommentPager;
    Comment: typeof Comment;
    PlaylistPager: typeof PlaylistPager;
    ChannelPager: typeof ChannelPager;
    FilterCapability: typeof FilterCapability;
    log: (message: string) => void;
    bridge: typeof bridge;
    http: typeof http;
}

const globals = {
    source,
    Type,
    Language,
    PlaybackTracker,
    VideoPager,
    VideoUrlRangeSource,
    AudioUrlRangeSource,
    RequestModifier,
    LiveEventPager,
    CommentPager,
    Comment,
    PlaylistPager,
    ChannelPager,
    FilterCapability,
    log,
    bridge,
    http
};

function runVM(globals: Globals) {
    const code = fs.readFileSync("./youtube/YoutubeScript.js", "utf-8");
    const sandbox = globals;

    // Add the vm context
    vm.createContext(sandbox); // Create the context for the sandbox

    // Run the code in the sandbox
    vm.runInContext(code, sandbox);
    console.log(source.enable());
}

function run(globals: Globals) {
    for(let key in globals) {
        global[key] = globals[key];
    }
    require("./youtube/YoutubeScript");
    source.enable();

}
//runVM(globals)
//run(globals)

console.log(http.GET("https://google.com"))