import * as CartConstant from "../constant/cart.constant";
import { callApi, apiContainData } from "../../utils/callApi";

export const getListCartAction = (idUser) =>{
    return async (dispatch) =>{
        try {
            
            const res = await callApi(`cart-details/nam`, "GET")
            dispatch({
                type: CartConstant.GET_CART_ITEMS,
                data: res.data
            })
          } catch (error) {
            console.log(error);
          }
    }
};

export const updateCartAction = (itemId, data) =>{
    return async (dispatch) =>{
        try{
            const res = await apiContainData(`cart-details/nam/P00001`, "PUT", data);
            dispatch({
                type: CartConstant.UPDATE_CART_ITEM,
                data: res.data
            })
            
        } catch(error){
            console.log(error);
        }
    }
}

export const insertCartAction = (item) =>{
    return async (dispatch) => {
        try{
            const res = await apiContainData(`cart-details/`,'POST', item);
            dispatch({
                type: CartConstant.ADD_CART_ITEM,
                data: res.data
            })
        }
        catch(error){
            console.log(error);
        }
    }
}

export const deleteCartAction = (itemID) =>{
    return async (dispatch) =>{
        try{
            const res = await callApi(`cart-details/nam/${itemID}`, "DELETE");
            dispatch({
                type: CartConstant.DELETE_CART_ITEM,
                data: itemID
            })
            
        }catch(error){
            console.log(error);
        }
    }
}



