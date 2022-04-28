import * as NotificationConstant from '../constant/notification.constant';


const initialState = {
    modalState:false
};

export const notificationReducer = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case NotificationConstant.SHOW_NOTIFICATION: {
            state.modalState = data;
            return { ...state }
        }
        case NotificationConstant.CLOSE_NOTIFICATION: {
            state.modalState = data;
            return { ...state }
        }
        default:
            return state;
    }
};

