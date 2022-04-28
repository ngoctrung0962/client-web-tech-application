import { type } from '@testing-library/user-event/dist/type';
import { createStore } from 'redux';
import * as CartConstant from '../constant/cart.constant'

const initialState = {
    listCart: [],
    addItem: '',
    updateItem: '',
    deleteItem: ''
};

export const cartReducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case CartConstant.GET_CART_ITEMS: {
            state.listCart = data;
            return { ...state }
        }
        case CartConstant.ADD_CART_ITEM: {
            state.addItem = data;
            return { ...state }
        }
        case CartConstant.DELETE_CART_ITEM: {
            state.deleteItem = data;
            return { ...state }
        }
        case CartConstant.UPDATE_CART_ITEM: {
            state.updateItem = data;
            return { ...state }
        }
        default:
            return state;
    }
};

