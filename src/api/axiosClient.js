import axios from 'axios'
import Storagekey from "../constants/storagekey";

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api/technological_appliances',
    headers: {
        "Content-type": 'application/json'
    },
});

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem(Storagekey.ACCESS_TOKEN)
    config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${token}`
    }
    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error.response.data;
});

export default axiosClient;