const fs = require("fs");
const vm = require("vm");
const http = require("./http");
const bridge = require("./bridge");
const log = require("./log");
const {
    source,
    Type,
    Language
} = require("./var");
const {
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
} = require("./class");

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

function runVM(globals) {
    const code = fs.readFileSync("./youtube/YoutubeScript.js", "utf-8");
    const sandbox = globals;

    // Add the vm context
    vm.createContext(sandbox); // Create the context for the sandbox

    // Run the code in the sandbox
    vm.runInContext(code, sandbox);
    console.log(source.enable());
}

function run(globals) {
    for(let key in globals) {
        global[key] = globals[key];
    }
    require("./youtube/YoutubeScript");
    source.enable();

}
//runVM(globals)
//run(globals)

console.log(http.GET("https://google.com"))