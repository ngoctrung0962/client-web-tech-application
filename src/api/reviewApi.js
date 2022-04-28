import axiosClient from "./axiosClient"

const reviewApi = {
    getAll(params) {
        const url = '/Reviews'
        return axiosClient.get(url, { params: params });
    },
    get(id) {
        const url = `/Reviews/${id}`
        return axiosClient.get(url);
    },

    add(data) {
        const url = `/Reviews`
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/Reviews/${data.id}`
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/Reviews/${id}`
        return axiosClient.delete(url);
    }
}

export default reviewApi;