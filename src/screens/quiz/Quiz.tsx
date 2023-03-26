import { useState } from 'react';
import { View } from 'react-native';
import Question from '../../components/question/Question';
import RadioGroup from '../../components/radio/RadioGroup';
import NextButton from './_partials/NextButton';

import { showToast } from '../../common/utils/showToast';
import { ALERT_TYPE } from 'react-native-alert-notification';

import styles from '../../assets/styles/Quiz.style';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { setAnswer } from '../../store/questions/questionsSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';

function Quiz({ navigation }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState();

  const questions = useSelector((state:RootState) => state.questions.questions);

  const dispatch:AppDispatch = useDispatch();


  const options = [
    {
      id: 1,
      text: 'True'
    },
    {
      id: 2,
      text: 'False'
    }
  ];

  const handleSelect = (value) => {
    setSelected(value);
  };

  const checkAnswer = () => {
    const rightAnswer = questions[index].correct_answer;
    const result = selected === rightAnswer;

    dispatch(setAnswer({ userAnswer: selected, result, index }));
    console.log("RESULT:", result);
  }

  const handleNext = () => {
    if(selected) {
      checkAnswer();
      if (index + 1 <= questions.length - 1) {
        setIndex((prev) => prev + 1);
        setSelected(undefined);
      } else {
        setTimeout(() => {
          navigation.navigate('Result', { questions });
        }, 3000);
      }
    } else {
      showToast(ALERT_TYPE.WARNING, 'Warning', 'Please choose an answer!');
    }

  };

  return (
    <View style={styles.container}>
      <Question questions={questions} index={index} />
      <RadioGroup data={options} selected={selected} onSelect={handleSelect} />
      <NextButton onPress={handleNext} />
    </View>
  );
}

export default Quiz;
