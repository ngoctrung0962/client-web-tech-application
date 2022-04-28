import * as OrdersConstant from "../constant/orders.constain";
import { callApi, apiContainData } from "../../utils/callApi";

export const getListOrdersAction = (idUser) =>{
    return async (dispatch) =>{
        try {
            const res = await callApi(`orders/username/${idUser}`, "GET");
            dispatch({
                type: OrdersConstant.GET_ORDERS,
                data: res.data
            })
          } catch (error) {
            console.log(error);
          }
    }
};

export const  insertOrderAction = (order, listOrdersDetail) =>{
    return async (dispatch) =>{
        try{
            const res = await apiContainData(`orders`, 'POST', order);
            if(res.status === 200){
                listOrdersDetail.map((item) => item.id.orderId = res.data.orderId)
                
            }
            
            listOrdersDetail.forEach( async orderDetail => {
                await apiContainData(`order-details`, 'POST', orderDetail)
            })

            dispatch({
                type: OrdersConstant.ADD_ORDERS,
                data: order
            })

            return res;
        }
        catch(error){
            console.log(error);
        }
    }
}