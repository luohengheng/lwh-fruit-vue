import axios from 'axios';
import router from '@/router';
import config from '../config/config'

/**
 * http请求工具类
 *
 * 请求拦截器 负责将客户端标识token值存储并放置在头部提交给服务端
 *
 * 响应拦截器 负责全局处理业务请求的网络或者业务错误
 */

// 创建axios的实例
const service = axios.create({
    timeout: config.timeout, // 超时时间
    baseURL: config.baseUrl,
    // headers: config.defaultContentType,
});

const sucCode = 'S10000';
const logoutCode = 'E99999';
const failCode = 'E19999';

// 请求拦截
service.interceptors.request.use(
    (config) => {
        if (localStorage.fToken) {
            config.headers.Authorization = localStorage.fToken;
        }
        return config;
    },
    (err) => {
        Promise.reject(err);
    }
);

// 响应拦截
service.interceptors.response.use(
    (response) => {
        const {code, data:{data}, msg} = response.data
        if (code === sucCode) {
            return data
        }else if (code === logoutCode) {
            //todo 清除失效token 跳转登录页 弹出错误提醒
            localStorage.removeItem('fToken')
            router.push('/login')
            return Promise.reject(msg);
        }else if (code === failCode) {
            return Promise.reject(msg);
        }
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default service;
