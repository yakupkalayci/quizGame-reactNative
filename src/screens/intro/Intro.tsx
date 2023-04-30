// React
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { AppDispatch } from '../../store/store';
import { setUser, setDifficultyState, setScreenName } from '../../store/user/userSlice';

// Constants
import { difficultyItems } from '../../common/constants/dropdown/difficulties';
import { DifficultyTypes } from '../../common/constants/dropdown/dropdownConstants';
import { ALERT_TYPE } from 'react-native-alert-notification';

// Utils
import { showToast } from '../../common/utils/showToast';

// Components
import DifficultyPicker from './_partials/DifficultyPicker';
import Button from '../../components/button/Button';

// Style
import styles from '../../assets/styles/Intro.style';

function Intro({ navigation }) {
  // useSelector
  const { username: usernameState, difficulty: difficultyState } = useSelector((state: RootState) => state.user);

  // States
  const [username, setUsername] = useState(usernameState);
  const [difficulty, setDifficulty] = useState<DifficultyTypes>(difficultyState);

  // Dispatch
  const dispatch: AppDispatch = useDispatch();

  // Starts the game
  const handleStart = () => {
    if (username) {
      dispatch(setUser(username));
      dispatch(setDifficultyState(difficulty));
      dispatch({ type: 'fetchQuestions' })     
      navigation.navigate('Quiz');
      dispatch(setScreenName('quiz'));
    } else {
      showToast(ALERT_TYPE.WARNING, 'Warning', 'Please write your username!');
    }
  };

  // useEffect
  useEffect(() => {
    setScreenName('intro');
  }, []);

  return (
    <KeyboardAvoidingView style={styles.intro}>
      <Text style={styles.text}>Username:</Text>
      <TextInput style={styles.input} value={username} onChangeText={setUsername} />
      <DifficultyPicker state={difficulty} onChange={setDifficulty} items={difficultyItems} enabled={true} mode={'dropdown'} style={styles.pickerContainer} />
      <Button title="Start" onPress={handleStart} />
    </KeyboardAvoidingView>
  );
}

export default Intro;
