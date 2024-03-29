// React
import { useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

// Redux
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setAnswer } from '../../store/questions/questionsSlice';
import { setScreenName } from '../../store/user/userSlice';
import { AppDispatch } from '../../store/store';

// Partials
import NextButton from './_partials/NextButton';

// Components
import Question from '../../components/question/Question';
import RadioGroup from '../../components/radio/RadioGroup';

// Constants
import { ALERT_TYPE } from 'react-native-alert-notification';
import { options } from '../../common/constants/question/options';

// Utils
import { showToast } from '../../common/utils/showToast';

// Types
import { NextBtnTitles } from '../../common/constants/button/titles';

// Styles
import styles from '../../assets/styles/Quiz.style';

function Quiz({ navigation }) {
  // useSelector
  const { questions, index, loading, error } = useSelector((state: RootState) => state.questions);

  // useDispatch
  const dispatch: AppDispatch = useDispatch();

  // State
  const [selected, setSelected] = useState<string>();
  const [btnTitle, setBtnTitle] = useState<NextBtnTitles>('Next');

  // Functions
  // selects answer
  const handleSelect = (value) => {
    setSelected(value);
  };

  // check answer and set result to the store
  const checkAnswer = () => {
    const rightAnswer = questions[index].correct_answer;
    const result = selected === rightAnswer;

    dispatch(setAnswer({ userAnswer: selected, result, index }));
    if (result) {
      showToast(ALERT_TYPE.SUCCESS, 'Correct!', '', 500);
    } else {
      showToast(ALERT_TYPE.WARNING, 'Wrong!', '', 500);
    }
  }

  // opens next question
  const handleNext = () => {
    if (selected) {
      checkAnswer();

      if (index + 1 < questions.length) {
        setSelected(undefined);
        if(index + 1 === questions.length - 1) {
          setBtnTitle('Finish');
        }
      }
      else {
        navigation.navigate('Result');
        dispatch(setScreenName('result'));
      }
    } else {
      showToast(ALERT_TYPE.WARNING, 'Warning', 'Please choose an answer!');
    }

  };  

  return (
    <View style={styles.container}>
      {
        loading ? <ActivityIndicator size='large' /> :
          error ? <Text>{error}</Text>
            : (
              <>
                <Question question={questions[index]?.question} />
                <RadioGroup data={options} selected={selected} onSelect={handleSelect} />
                <NextButton onPress={handleNext} title={btnTitle}/>
              </>
            )
      }
    </View>
  );
}

export default Quiz;
