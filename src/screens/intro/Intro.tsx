// React
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { AppDispatch } from '../../store/store';
import { setUser, setDifficultyState, setScreenName } from '../../store/user/userSlice';

// NetInfo
import NetInfo from '@react-native-community/netinfo';

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
  
  // Dispatch
  const dispatch: AppDispatch = useDispatch();

  // States
  const [username, setUsername] = useState(usernameState);
  const [difficulty, setDifficulty] = useState<DifficultyTypes>(difficultyState);
  const [isConnected, setIsConnected] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);

  // Starts the game
  const handleStart = () => {
    if(isConnected) {
      if (username) {
        dispatch(setUser(username));
        dispatch(setDifficultyState(difficulty));
        dispatch({ type: 'fetchQuestions' })     
        navigation.navigate('Quiz');
        dispatch(setScreenName('quiz'));
      } else {
        showToast(ALERT_TYPE.WARNING, 'Warning', 'Please write your username!');
      }
    }
    else {
      showToast(ALERT_TYPE.DANGER, 'Error', 'No internet connection!');
    }
  };

  // useEffect
  useEffect(() => {
    setScreenName('intro');
    const unsubscribe = NetInfo.addEventListener(
      state => setIsConnected(state.isConnected ? state.isConnected : false)
    );
    setIsFirstRender(false);
    return () => {
      unsubscribe();
    }
  }, []);

  useEffect(() => {
    if(!isFirstRender) {
      showToast(
        isConnected ? ALERT_TYPE.SUCCESS : ALERT_TYPE.DANGER,
        isConnected ? 'Success' : 'Error',
        isConnected ? 'Connected!' : 'No internet connection'  
      );
    }
  }, [isConnected]);

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
