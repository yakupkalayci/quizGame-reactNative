import { Toast, ALERT_TYPE  } from "react-native-alert-notification"

export const showToast = (type: ALERT_TYPE, title: string, message: string, autoClose?:number) => {
    Toast.show({
        type,
        title,
        textBody: message,
        autoClose: autoClose ? autoClose : 5000
    });
};