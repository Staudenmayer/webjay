import axios from 'axios';
import async from 'async';

class http {
    queue: undefined | Array<Function> = undefined;
    GET(url: string, headers: axios.AxiosRequestHeaders, useAuth: Boolean = false, useByteResponse: Boolean = false) {
        if(this.queue) {
            this.queue.push(function(arg: Function | Array<string>, callback: undefined | Function) {
                let res = `HTTP GET ${url} ${headers} ${useAuth} ${useByteResponse}`;
                
                //Axios get here

                if(arg && !callback && arg instanceof Function) {
                    return arg(null, [res]);
                }
                if(arg instanceof Array) {
                    arg.push(res);
                }
                if(callback) { 
                    callback(null, arg); 
                }
            });
            return this;
        }
        let res = `HTTP GET ${url} ${headers} ${useAuth} ${useByteResponse}`;

        //Axios get here

        return res;
    }
    POST(url: string, body: Object, headers: axios.AxiosRequestHeaders, useAuth: Boolean = false, useByteResponse: Boolean = false) {
        if(this.queue) {
            this.queue.push(function(arg: Function | Array<string>, callback: undefined | Function) {
                let res = `HTTP POST ${url} ${body} ${headers} ${useAuth} ${useByteResponse}`;
                
                //Axios post here

                if(arg && !callback && arg instanceof Function) {
                    return arg(null, [res]);
                }
                if(arg instanceof Array) {
                    arg.push(res);
                }
                if(callback) { 
                    callback(null, arg); 
                }
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
        //asyn.waterfall(this.queue, function(err, result) {
        //    if(err) {
        //        console.error(err);
        //    }
        //    else {
        //        console.log(result);
        //    }
        //})
        this.queue = undefined;
        console.log("HTTP batch GET Execute");
        return [{isOk: true}]
    }
}

module.exports = new http();