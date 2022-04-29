import axiosClient from "./axiosClient"

const userApi = {
    register(data) {
        const url = '/Users/Register'
        return axiosClient.post(url, data);
    },
    get(username) {
        const url = `/users/${username}`
        return axiosClient.get(url);
    },

}

export default userApi;