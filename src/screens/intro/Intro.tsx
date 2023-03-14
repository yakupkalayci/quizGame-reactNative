// React
import { useState } from 'react';
import { KeyboardAvoidingView, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { DROPDOWN_DIFFICULY_VALUES } from '../../common/constants/dropdown/dropdownConstants';

import { Picker } from '@react-native-picker/picker';

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
      <TouchableOpacity style={styles.btn} onPress={() => handleStart()}>
        <Text style={styles.btnText}>Start</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default Intro;
