import { Toast, ALERT_TYPE  } from "react-native-alert-notification"

export const showToast = (type: ALERT_TYPE, title: string, message: string) => {
    Toast.show({
        type,
        title,
        textBody: message
    });
};