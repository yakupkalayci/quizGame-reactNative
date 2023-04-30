// React
import { View } from "react-native";

// React-native dilaog
import Dialog from "react-native-dialog";

export type DialogBoxButton = {
    label: string;
    onPress: () => void;
}

interface DialogBoxProps {
    visible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    title: string,
    description: string,
    btnTitle: string,
    onPress: () => void,
}

function DialogBox(props: DialogBoxProps) {

    // destruct props
    const { visible, setVisible, title, description, btnTitle, onPress } = props;

    return (
        <View>
            <View>
                <Dialog.Container visible={visible}>
                    <Dialog.Title>{title}</Dialog.Title>
                    <Dialog.Description>{description}</Dialog.Description>
                    <Dialog.Button label={btnTitle} onPress={onPress} />
                    <Dialog.Button label="cancel" onPress={() => setVisible(!visible)} />
                </Dialog.Container>
            </View>
        </View>


    )
}

export default DialogBox;