import axiosClient from "./axiosClient"

const userApi = {
    register(data) {
        const url = '/Users/Register'
        return axiosClient.post(url, data);
    },
}

export default userApi;