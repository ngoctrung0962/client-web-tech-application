import axios from "axios";
import {callApi} from "./callApi";
import swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


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

export const showNotification = (icon, title, text, confirmButtonText, callBack) =>{
    swal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmButtonText: confirmButtonText,
        allowOutsideClick: false
    })
        .then( result => {
             if(result.isConfirmed)
                callBack();
        })
}

