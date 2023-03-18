import { View, Text } from 'react-native';

import styles from '../../assets/styles/Question.style';

interface QuestionProps {
  questions: any[];
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
