import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import userApi from "../api/userApi";
import Storagekey from "../constants/storagekey";
import { showNotification } from "../utils/MyUtils";

export const login = async (dispatch, data, username) => {
    dispatch(loginStart());
    if (data.AccessToken && data.RefreshToken) {
        const isdone = await saveToken(data.AccessToken, data.RefreshToken)
        if (isdone) {
            const userdata = await userApi.get(username)
            dispatch(loginSuccess(userdata))
            localStorage.setItem(Storagekey.USER, JSON.stringify(userdata))
        }
    } else {
        dispatch(loginFailure());
    }
};

const saveToken = (accessToken, refreshToken) => {
    localStorage.setItem(Storagekey.ACCESS_TOKEN, accessToken)
    localStorage.setItem(Storagekey.REFRESH_TOKEN, refreshToken)
    return true
}

export const register = async (dispatch, data) => {
    dispatch(RegisterStart());
    try {
        const res = await userApi.register(data);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: JSON.parse(localStorage.getItem(Storagekey.USER)) || null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        RegisterStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        RegisterSuccess: (state, action) => {
            state.isFetching = false;
        },
        RegisterFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        Logout(state) {
            localStorage.clear();
            state.currentUser = null;
            showNotification('success', 'Goodbye', '', 'OK')
        }
    },
});

export const { loginStart, loginSuccess, loginFailure, RegisterStart, RegisterSuccess, RegisterFailure, Logout } = userSlice.actions;
export default userSlice.reducer;
