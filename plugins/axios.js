/**axios封装
 * 请求拦截、响应拦截、错误统一处理
 */

import Axios from 'axios'

const axios = Axios.create({
    baseURL: '/api',
    timeout: 1000 * 12,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

// 请求拦截器
axios.interceptors.request.use(
    config => {
        console.log("axios request");
        // 在发送请求之前需要的操作
        return config;
    },
    error => {
        // 对请求错误需要执行的操作
        return Promise.error(error);
    }
)

// 响应拦截器
axios.interceptors.response.use(
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    (res) => {
        console.log("axios response");
        if(res.status === 200) {
            Promise.resolve(res)
        } else {
            Promise.reject(res)
        }
    },
    // 请求失败
    error => {
        console.log("Response Error");
        return Promise.reject(error.response);
    }
)

export default axios;