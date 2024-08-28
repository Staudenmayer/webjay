const axios = require('axios');
const async = require('async');
class http {
    queue = undefined;
    GET(url, headers, useAuth = false, useByteResponse = false) {
        if(this.queue) {
            this.queue.push(function(arg, callback) {
                let res = `HTTP GET ${url} ${headers} ${useAuth} ${useByteResponse}`;
                
                //Axios get here

                if(arg && !callback) {
                    return arg(null, [res]);
                }
                arg.push(res);
                return callback(null, arg);
            })
            return this;
        }
        let res = `HTTP GET ${url} ${headers} ${useAuth} ${useByteResponse}`;

        //Axios get here

        return res;
    }
    POST(url, body, headers, useAuth = false, useByteResponse = false) {
        if(this.queue) {
            this.queue.push(function(arg, callback) {
                let res = `HTTP POST ${url} ${body} ${headers} ${useAuth} ${useByteResponse}`;
                
                //Axios post here

                if(arg && !callback) {
                    return arg(null, [res]);
                }
                arg.push(res);
                return callback(null, arg);
            })
            return this;
        }
        let res = `HTTP POST ${url} ${body} ${headers} ${useAuth} ${useByteResponse}`;

        //Axios post here

        return res;
    }
    batch() {
        this.queue = [];
        return this;
    }
    execute() {
        if(!this.queue) {
            return [{isOk: false}];
        }
        async.waterfall(this.queue, function(err, result) {
            if(err) {
                console.error(err);
            }
            else {
                console.log(result);
            }
        })
        this.queue = undefined;
        console.log("HTTP batch GET Execute");
        return [{isOk: true}]
    }
}

module.exports = new http();