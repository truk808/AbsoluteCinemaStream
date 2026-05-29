import axios from "axios";
import type { InternalAxiosRequestConfig } from 'axios';

const $kinopoiskHost = axios.create({
    baseURL: import.meta.env.VITE_API_KINOPOISK_URL,
});

const kinopoiskInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    config.headers['X-API-KEY'] = import.meta.env.VITE_API_KINOPOISK_KEY;
    config.headers['Content-Type'] = 'application/json';
    return config;
}

$kinopoiskHost.interceptors.request.use(kinopoiskInterceptor)

export {
    $kinopoiskHost,
}