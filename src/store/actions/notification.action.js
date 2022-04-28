import * as NotificationConstant from '../constant/notification.constant';

export const showNotification = () =>{
    return (dispatch) =>{
        dispatch({
            type: NotificationConstant.SHOW_NOTIFICATION,
            data: true
        })
    }
};

export const closeNotification = () => {
    return (dispatch) =>{
        dispatch({
            type: NotificationConstant.SHOW_NOTIFICATION,
            data: true
        })
    }
}
