import axiosClient from "./axiosClient"

const reviewApi = {
    getAll(params) {
        const url = '/reviews'
        return axiosClient.get(url, { params: params });
    },
    get(id) {
        const url = `/reviews/${id}`
        return axiosClient.get(url);
    },

    add(data) {
        const url = `/reviews`
        return axiosClient.post(url, data);
    },

    update(data) {
        const url = `/reviews/${data.id}`
        return axiosClient.patch(url, data);
    },

    remove(id) {
        const url = `/reviews/${id}`
        return axiosClient.delete(url);
    },
    getreviewbyproductId(productId) {
        const url = `/reviews/product/${productId}`
        return axiosClient.get(url);
    }
}

export default reviewApi;