// React
import { useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { AppDispatch } from '../../store/store';
import { setUser, setDifficultyState } from '../../store/user/userSlice';

import { DROPDOWN_DIFFICULY_VALUES } from '../../common/constants/dropdown/dropdownConstants';
import { DifficultyTypes } from '../../common/constants/dropdown/dropdownConstants';

import { Picker } from '@react-native-picker/picker';

import Button from '../../components/button/Button';

import styles from '../../assets/styles/Intro.style';

function Intro({ navigation }) {
  const { username: usernameState, difficulty: difficultyState } = useSelector((state: RootState) => state.user);

  const [username, setUsername] = useState(usernameState);
  const [difficulty, setDifficulty] = useState<DifficultyTypes>(difficultyState);

  const dispatch:AppDispatch = useDispatch();

  const handleStart = () => {
    dispatch(setUser(username));
    dispatch(setDifficultyState(difficulty));
    dispatch({ type: 'fetchQuestions' })
    navigation.navigate('Quiz');
  };

  return (
    <KeyboardAvoidingView style={styles.intro}>
      <Text style={styles.text}>Username:</Text>
      <TextInput style={styles.input} value={username} onChangeText={setUsername} />
      <Picker
        selectedValue={difficulty}
        onValueChange={(value) => {
          setDifficulty(value);
        }}
        enabled={true}
        mode={'dropdown'}
        style={styles.pickerContainer}
      >
        <Picker.Item label="Easy" value={DROPDOWN_DIFFICULY_VALUES.EASY} enabled={true} style={styles.pickerItem} />
        <Picker.Item label="Medium" value={DROPDOWN_DIFFICULY_VALUES.MEDIUM} enabled={true} style={styles.pickerItem} />
        <Picker.Item label="Hard" value={DROPDOWN_DIFFICULY_VALUES.HARD} style={styles.pickerItem} />
      </Picker>
      <Button title="Start" onPress={handleStart} />
    </KeyboardAvoidingView>
  );
}

export default Intro;
