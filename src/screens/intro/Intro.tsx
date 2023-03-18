// React
import { useState } from 'react';
import { KeyboardAvoidingView, Text, TextInput } from 'react-native';

import { DROPDOWN_DIFFICULY_VALUES } from '../../common/constants/dropdown/dropdownConstants';

import { Picker } from '@react-native-picker/picker';

import Button from '../../components/button/Button';

import styles from '../../assets/styles/Intro.style';

function Intro({ navigation }) {
  const [difficulty, setDifficulty] = useState('easy');

  const handleStart = () => {
    navigation.navigate('Quiz');
  };

  return (
    <KeyboardAvoidingView style={styles.intro}>
      <Text style={styles.text}>Username:</Text>
      <TextInput style={styles.input} />
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
