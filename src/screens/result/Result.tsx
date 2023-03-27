import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { useDispatch } from 'react-redux';
import { resetIndex } from '../../store/questions/questionsSlice';

import Button from '../../components/button/Button';

import styles from '../../assets/styles/Result.style';

function Result({ navigation, route }) {
  const dispatch = useDispatch();

  const [score, setScore] = useState(0);

  const questions = route.params.questions;

  const calcScore = () => {
    questions.forEach((item) => {
      if (item.users_answer.result === true) {
        setScore((prev) => prev + 1);
      }
    });
  };

  const tryAgain = () => {
    navigation.navigate('Intro');
    dispatch(resetIndex());
  };

  useEffect(() => {
    calcScore();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Game Over</Text>
      <Text style={styles.infoText}>
        Your score <Text style={score >= 5 ? [styles.goodScore, styles.bold] : [styles.badScore, styles.bold]}>{score}</Text> out of <Text style={styles.bold}>{questions.length}</Text>
      </Text>
      <Button title="Try Again" onPress={tryAgain} btnStyle={styles.btn} />
      <Button title="Save Score" onPress={() => null}/>
    </View>
  );
}

export default Result;
