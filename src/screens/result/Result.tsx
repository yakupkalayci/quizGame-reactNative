// React
import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { resetIndex } from '../../store/questions/questionsSlice';
import { RootState } from '../../store/store';

// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

// UUID
import uuid from 'react-uuid';

// Partials
import AnswerModal from './_partials/AnswersModal';
import ScoresModal from './_partials/ScoresModal';

// Utils
import { showToast } from '../../common/utils/showToast';
import { getSavedScoresFromStorage } from '../../common/utils/getSavedScores';

// Constants
import { ALERT_TYPE } from 'react-native-alert-notification';

// Components
import Button from '../../components/button/Button';
import DialogBox from '../../components/dialog-box/DialogBox';

// styles
import styles from '../../assets/styles/Result.style';
import Dialog from 'react-native-dialog';

function Result({ navigation }) {
  // useSelector
  const questions = useSelector((state:RootState) => state.questions.questions);
  const username = useSelector((state:RootState) => state.user.username);

  // useDispatch
  const dispatch = useDispatch();

  // useState
  const [score, setScore] = useState(0);
  const [answersModal, setAnswersModal] = useState(false);
  const [scoresModal, setScoresModal] = useState(false);
  const [savedScore, setSavedScore] = useState();
  const [showDialog, setShowDialog] = useState(false);
  const [disableSave, setDisableSave] = useState(false);

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

  const onAnswersModalEvent = () => {
    setAnswersModal(!answersModal);
  }

  const onScoresModalEvent = () => {
    setScoresModal(!scoresModal);
  }

  const saveScore = () => {
    setShowDialog(!showDialog);
  };

  const onPressOK = async () => {
    const newScore = {
      id: uuid(),
      date: Date.now(),
      username,
      score
    };

    try {
      const existingData = await getSavedScoresFromStorage();
      const newData = [...existingData, newScore];
      await AsyncStorage.setItem('scores', JSON.stringify(newData));
      setSavedScore(newScore);
      // setSavedScore('x');¨
      showToast(ALERT_TYPE.SUCCESS, "Success", "Saved score!");
      setDisableSave(true);
      setScoresModal(!scoresModal);
    } catch(err) {
      console.log(err);
      showToast(ALERT_TYPE.DANGER, "Error", `${err}`);
    }

    setShowDialog(!showDialog)
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
      <Button title="Show Answers" onPress={onAnswersModalEvent} btnStyle={styles.btnShowAnswers} />
      <Button title="Try Again" onPress={tryAgain} btnStyle={styles.btnTryAgain} />
      <Button title="Save Score" onPress={saveScore} disabled={disableSave} />
      <AnswerModal isVisible={answersModal} onModalEvent={onAnswersModalEvent} questions={questions} />
      <ScoresModal isVisible={scoresModal} onModalEvent={onScoresModalEvent} scores={savedScore}  />
      <DialogBox 
        title='Confirmation' 
        description='Are you sure want to save this score to the device?' 
        visible={showDialog} setVisible={setShowDialog} 
        btnTitle="Yes" 
        onPress={onPressOK} 
      />
    </View>
  );
}

export default Result;
