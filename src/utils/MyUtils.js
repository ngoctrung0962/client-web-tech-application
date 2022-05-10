import axios from "axios"
import {callApi} from "./callApi"

export const checkQuantityItem = async(itemId, newQuantity) => {
    const res = await callApi(`/products/${itemId}`, "GET");
    if(newQuantity > res.data[0].quantity )
        return false;
    return true;
}

export const formatVND = (price) =>{
    const formatPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    return formatPrice;
}