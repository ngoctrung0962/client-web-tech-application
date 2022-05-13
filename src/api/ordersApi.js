import { callApi, apiContainData} from '../utils/callApi'

export const getListOrdersApi = async (idUser) =>{
    try {
        const res = await callApi(`orders/username/${idUser}`, "GET");
        return res.data;
      } catch (error) {
        console.log(error);
      }
};

export const  insertOrderApi = async(order, listOrdersDetail) =>{
    try{
        const res = await apiContainData(`orders`, 'POST', order);
        console.log(res);
        if(res.status === 200){
            console.log('sss')
            listOrdersDetail.map((item) => item.id.orderId = res.data.orderId)
            
            for(let item of listOrdersDetail){
                const res =  await apiContainData(`order-details`, 'POST', item);
            }
            
        }

        return res;
    }
    catch(error){
        console.log(error);
    }
};