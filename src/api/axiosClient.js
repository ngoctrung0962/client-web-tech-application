import axios from 'axios'

const axiosClient = axios.create({
<<<<<<< HEAD
    // baseURL: 'https://623d4496db0fc039d4b504fa.mockapi.io/api/',
    // baseURL: 'https://624bb3b671e21eebbcf54d85.mockapi.io',
     baseURL: 'http://localhost:8080/api/technological_appliances',
=======
    baseURL: 'http://localhost:8080/api/technological_appliances',
>>>>>>> 4e9408eb5470a7a8736234bb260a2396377209c9
    headers: {
        "Content-type": 'application/json'
    },
});

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
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
    return Promise.reject(error);
});

export default axiosClient;