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
    update(username, data) {
        const url = `/users/${username}`
        return axiosClient.put(url, data);
    },

}

export default userApi;