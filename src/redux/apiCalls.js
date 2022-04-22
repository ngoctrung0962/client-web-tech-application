import userApi from "../api/userApi";
import Storagekey from "../constants/storagekey";
import { loginFailure, loginStart, loginSuccess, RegisterStart } from "./userRedux";


export const login = async (dispatch, user) => {
  dispatch(loginStart());

  const userFake = {
    username: "Trung",
    password: "123"
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
