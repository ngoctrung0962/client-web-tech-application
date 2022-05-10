import { combineReducers } from "redux";
import {cartReducer} from "./cart.reducer";
import {ordersReducer} from './orders.reducer'
import {notificationReducer} from './notification.reducer'

const appReducers = combineReducers({
    cart: cartReducer,
    orders: ordersReducer,
    notification: notificationReducer
});

export default appReducers;