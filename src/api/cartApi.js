
import { callApi, apiContainData} from '../utils/callApi'
import Storagekey from "../constants/storagekey";

export const getListCartApi = async (username) => {
  try {

    const res = await callApi(`cart-details/${username}`, "GET")
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

export const deleteCartApi = async (username, itemID) => {
  try {
    const res = await callApi(`cart-details/${username}/${itemID}`, "DELETE");
    return res.data

  } catch (error) {
    console.log(error);
  }
}

export const updateCartApi = async ( username,itemId, data) => {
  try {
    const res = await apiContainData(`cart-details/${username}/${itemId}`, "PUT", data);
    return res.data

  } catch (error) {
    console.log(error);
  }
}



