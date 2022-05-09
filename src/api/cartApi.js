
import { callApi, apiContainData} from '../utils/callApi'

export const getListCartApi = async (idUser) => {
  try {

    const res = await callApi(`cart-details/nam`, "GET")
    return res.data
  } catch (error) {
    console.log(error);
  }
};

export const insertCartApi = async (item) => {
  try {
    const res = await apiContainData(`cart-details/`, 'POST', item);
    return res;
  }
  catch (error) {
    console.log(error);
  }
}

export const deleteCartApi = async (itemID) => {
  try {
    const res = await callApi(`cart-details/nam/${itemID}`, "DELETE");
    return res.data

  } catch (error) {
    console.log(error);
  }
}

export const updateCartApi = async (itemId, data) => {
  try {
    const res = await apiContainData(`cart-details/nam/${itemId}`, "PUT", data);
    return res.data

  } catch (error) {
    console.log(error);
  }
}



