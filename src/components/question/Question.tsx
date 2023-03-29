// React
import { View, Text } from 'react-native';

import { Question } from '../../store/questions/_types/question';

// styles
import styles from '../../assets/styles/Question.style';

interface QuestionProps {
  questions: Question[];
  index: number;
}

export default function Question(props: QuestionProps) {
    // destruct props
  const { questions, index } = props;

  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{questions[index]?.question}</Text>
    </View>
  );
}
