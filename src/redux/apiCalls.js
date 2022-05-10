
import { useNavigate } from "react-router-dom";
import userApi from "../api/userApi";
import Storagekey from "../constants/storagekey";
import { loginFailure, loginStart, loginSuccess, RegisterStart } from "./userRedux";


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  const userFake = {
    username: "nam",
    password: "123",
    address: "Bến Tre",
    dateOfBirth: "2001-11-28",
    email: "thanhnam.thai01@gmail.com",
    gender: true,
    name: "Thành Nam",
    phoneNumber: "0981771024",
    role: 0,
  }

  if (user.username === userFake.username && user.password === userFake.password) {
    dispatch(loginSuccess(userFake));
    localStorage.setItem(Storagekey.USER, JSON.stringify(user))
  }
  else {
    dispatch(loginFailure());
  }

};

export const register = async (dispatch, data) => {
  dispatch(RegisterStart());
  try {
    const res = await userApi.register(data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
