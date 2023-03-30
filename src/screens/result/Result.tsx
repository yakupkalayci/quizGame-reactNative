// React
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { resetIndex } from '../../store/questions/questionsSlice';
import { RootState } from '../../store/store';

// Partials
import AnswerModal from './_partials/AnswersModal';

// Components
import Button from '../../components/button/Button';

// styles
import styles from '../../assets/styles/Result.style';

function Result({ navigation }) {
  // useSelector
  const questions = useSelector((state:RootState) => state.questions.questions);

  // useDispatch
  const dispatch = useDispatch();

  // useState
  const [score, setScore] = useState(0);
  const [modal, setModal] = useState(false);

  // calculates score
  const calcScore = () => {
    questions.forEach((item) => {
      if (item.users_answer.result === true) {
        setScore((prev) => prev + 1);
      }
    });
  };

  // navigates to intro page
  const tryAgain = () => {
    navigation.navigate('Intro');
    dispatch(resetIndex());
  };

  const onModalEvent = () => {
    setModal(!modal);
  }

  // useEffect
  useEffect(() => {
    calcScore();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Game Over</Text>
      <Text style={styles.infoText}>
        Your score <Text style={score >= 5 ? [styles.goodScore, styles.bold] : [styles.badScore, styles.bold]}>{score}</Text> out of <Text style={styles.bold}>{questions.length}</Text>
      </Text>
      <Button title="Show Answers" onPress={onModalEvent} btnStyle={styles.btnShowAnswers} />
      <Button title="Try Again" onPress={tryAgain} btnStyle={styles.btnTryAgain} />
      <Button title="Save Score" onPress={() => null}/>
      <AnswerModal isVisible={modal} onModalEvent={onModalEvent} questions={questions} />
    </View>
  );
}

export default Result;
