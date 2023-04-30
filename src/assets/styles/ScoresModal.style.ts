import { StyleSheet } from "react-native";

export default StyleSheet.create({
    modal: {
        marginTop: 620,
        margin: 0
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f7f7f7',
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#000',
        marginBottom: 10,
        paddingTop: 15
    },
    modalTitleDate: {
        paddingLeft: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
});