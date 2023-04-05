import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
        marginTop: 350,
        zIndex: 100
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f7f7f7',
    },
    question: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        color: '#000',
        marginBottom: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    answerText: {
        fontWeight: 'bold'
    },
    correctAnswer: {
        color: 'green'
    },
    wrongAnswer: {
        color: 'red'
    },
    index: {
        fontWeight: 'bold',
        height: 30
    }
});
