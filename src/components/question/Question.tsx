// React
import { View, Text } from 'react-native';

// styles
import styles from '../../assets/styles/Question.style';

interface QuestionProps {
  question: string;
}

export default function Question(props: QuestionProps) {
    // destruct props
  const { question } = props;

  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{question}</Text>
    </View>
  );
}
