//https://gitlab.futo.org/videostreaming/plugins/youtube.git
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

interface context extends Globals {
    source: {
        enable: () => void;
    }
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

function runDbg(globals: Globals) {
    for(let key in globals) {
        // @ts-ignore
        global[key] = globals[key];
    }
    require("./youtube/YoutubeScript");
    // @ts-ignore
    source.enable();
}
runDbg(globals);

console.log(http.GET("https://google.com"))