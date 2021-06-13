import axios from "axios";

const CToken = axios.CancelToken;
const previousRequests: any = {};
const baseURL = "https://pizzavovaapi.herokuapp.com/" || '';
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    Authorization: `Bearer ${
        Boolean(localStorage.getItem("access_token")) ? localStorage.getItem("access_token") : ""
    }`,
};

export class WrapperRequest {
    post = (url: string, params = {}, cancelPrevious = false) =>
        WrapperRequest.makeRequest("post", url, params, cancelPrevious);

    put = (url: string, params = {}, cancelPrevious = false) =>
        WrapperRequest.makeRequest("put", url, params, cancelPrevious);

    patch = (url: string, params = {}, cancelPrevious = false) =>
        WrapperRequest.makeRequest("patch", url, params, cancelPrevious);

    get = (url: string, params = {}, cancelPrevious = false) =>
        WrapperRequest.makeRequest("get", url, params, cancelPrevious);

    delete = (url: string, params = {}, cancelPrevious = false) =>
        WrapperRequest.makeRequest("delete", url, params, cancelPrevious);

    static makeRequest(
        method: string,
        url: string,
        parameters: any,
        cancelPrevious: any
    ) {
        if (cancelPrevious && previousRequests[url]) {
            previousRequests[url].cancel();
        }
        let data = {};
        let params = {};
        let customHeaders = {};
        if (method === "post" || method === "patch" || method === "put") {
            data = parameters;
        } else if (method === "get") {
            params = parameters;
        }

        if(parameters.data){
            data = parameters.data
            customHeaders = parameters.headers
        }else{
            data = parameters
        }

        const instance = axios.create({  baseURL, });
        const config: any = {
            method,
            baseURL,
            url,
            headers:{
                ...headers,
                ...customHeaders
            },
            data,
            params,
            cancelToken: new CToken((c) => {
                if (!previousRequests[url]) {
                    previousRequests[url] = {};
                }
                previousRequests[url].cancel = c;
            }),
        };
        config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
        return instance.request(config);
    }
}