// React
import { ScrollView, View, Text } from 'react-native';

// Modal
import Modal from 'react-native-modal';

// Components
import Question from '../../../components/question/Question';

// Types
import { IQuestion } from '../../../store/questions/_types/question';

// style
import styles from '../../../assets/styles/AnswerModal.style';

interface AnswerModalProps {
    isVisible: boolean,
    onModalEvent: () => void,
    questions: IQuestion[],
}

function AnswersModal(props: AnswerModalProps) {
    // destruct props
    const { isVisible, onModalEvent, questions } = props;

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onModalEvent}
            style={styles.modal}
        >
            <ScrollView>
                <View style={styles.view}>
                    <View style={styles.header}>
                        <Text style={styles.modalTitle}>Index</Text>
                        <Text style={styles.modalTitle}>Question</Text>
                        <Text style={styles.modalTitle}>Answer</Text>
                    </View>
                    {
                        questions.map((item, index) => (
                            <View style={styles.question} key={item.question}>
                                <Text style={styles.index}>{index + 1}</Text>
                                <Question question={item.question} />
                                <Text style={item.correct_answer === 'True' ? [styles.correctAnswer, styles.answerText] : [styles.wrongAnswer, styles.answerText]}>{item.correct_answer}</Text>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </Modal>
    )
}

export default AnswersModal;