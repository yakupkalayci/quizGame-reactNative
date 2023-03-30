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
            onSwipeComplete={onModalEvent}
            swipeDirection={'down'}
            propagateSwipe={true}
            style={styles.modal}
        >
            <ScrollView>
                <View style={styles.view}>
                    <Text style={styles.modalTitle}>Answers</Text>
                    {
                        questions.map(item => (
                            <View style={styles.question}>
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