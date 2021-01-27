import qs from 'qs'
import path_join from './path_join.js'
import * as Status from './errorCodes.js'
import {
    loadingClose,
    loadingOpen,
    setUserInfo,
} from '../actions/index.js'

let count = 0;
let time = 0;
let timer = null;
let timeOutTimer = null;
let timeOut = 60000;

const protocol = "http://"
const adress = "39.100.11.92:"
const port = "8080"
const version = ""
//http://39.101.129.59:8080/Ebrain-1.0/game/listAll

let TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MDAwODAwMDEsInVzZXJJZCI6IjE4ZTdmYjY1LTZlNjAtNDQ2YS04MTBlLWZlOTg1ZWM1ZWE3OSJ9.egdLGA3TCoGm1V6Nd50Hcklha03ZRPP1Qrrdq7MAzE4"

//开发地址
const SERVER_BASE = protocol + adress + port + version;

/**
 * 数据请求生成函数
 * @method http_factory
 * @for 所属类名
 * @param {string} method 请求类型
 * @return func
 *  @param {string} url 请求url
 *  @param {object} params 请求参数
 *  @param {bool} isLoading 是否开启Loading
 */

const http_factory = method => (url, params = {}, isLoading = true) => {
    url = path_join(SERVER_BASE, url);
    console.log('fetching: ', url);
    //TODO:获取用户信息 userInfo
    let userInfo = { token: TOKEN };

    //请求头
    let headers = {
        //token: userInfo.token
    };

    const options = {
        method,
        headers,
    };

    if (method === 'GET') {
        const query = qs.stringify(params);
        if (query) {
            url += `?${query}`;
        }
    } else {
        if (JSON.stringify(params) !== '{}') {
            let formData = new FormData();

            for (let key in params) {
                formData.append(key, params[key]);
            }

            options.body = formData;
        }
    }

    return new Promise((resolve, reject) => {
        clearTimeout(timeOutTimer);

        if (count <= 0) {
            //time = new Date().getDate();
            //TODO: 发送 loadingOpen 的 action
        }

        isLoading && count++;

        timeOutTimer = setTimeout(() => {
            const msg = '网络说：“我裂开了”';

            clearTimeout(timeOutTimer);
            //TODO: 发送 loadingClose 的 action
            //TODO: 发送 显示错误信息的悬浮窗 的 action
            reject(msg);
        }, timeOut);

        fetch(url, options)
            .then(response => response.json())
            .catch(e => {
                console.log(e);
                return { message: '网络打了个喷嚏' }
            })
            .then(data => {
                isLoading && count--;
                clearTimeout(timer);

                if (data.code === Status.SUCCESS_CODE || data.code === '0000') {
                    resolve(data);
                } else if (data.code === Status.FAILURE_TOKEN) {
                    //TODO: 登录认证失效的处理
                } else {
                    let msg = data.message || '错误，请稍后再试';
                    reject(msg);
                }
            });
    });
}

const getRequset = http_factory('GET');
const postRequset = http_factory('POST');

export { getRequset, postRequset };
export { SERVER_BASE };