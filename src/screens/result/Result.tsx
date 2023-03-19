import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import Button from '../../components/button/Button';

import styles from '../../assets/styles/Result.style';

function Result({ navigation, route }) {
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
  };

  useEffect(() => {
    calcScore();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Game Over</Text>
      <Text style={styles.infoText}>
        Your score {score} out of {questions.length}
      </Text>
      <Button title="Try Again" onPress={tryAgain} btnStyle={styles.btn} />
      <Button title="Save Score" onPress={() => null}/>
    </View>
  );
}

export default Result;
