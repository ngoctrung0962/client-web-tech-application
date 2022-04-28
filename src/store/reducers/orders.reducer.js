import { type } from '@testing-library/user-event/dist/type';
import { createStore } from 'redux';
import * as OrdersConstant from '../constant/orders.constain';

const initialState = {
    listOrders: [],
    addOrder: '',
    updateOrder: '',
    deleteOrder: ''
};

export const ordersReducer =  (state = initialState, action) => {
    const {type, data} = action;
    switch (type) {
        case OrdersConstant.GET_ORDERS:
            state.listOrders = data;
            return {...state}
        case OrdersConstant.ADD_ORDERS:
            state.addOrder = data;
            return {...state};
        case OrdersConstant.UPDATE_ORDERS:
            state.updateOrder = data;
            return {...state};
        case OrdersConstant.DELETE_ORDERS:
            state.deleteOrder = data;
            return {...state};
        default:
            return state;
    }
}