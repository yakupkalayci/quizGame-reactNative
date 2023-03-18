import React from 'react'
import { View, Text } from 'react-native'

import Button from '../../components/button/Button';

import styles from '../../assets/styles/Result.style';

function Result({ navigation }) {
  const fakeStore = 5;

  const tryAgain = () => {
    navigation.navigate('Intro');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Game Over</Text>
      <Text style={styles.infoText}>Your score {fakeStore} out of 10</Text>
      <Button title="Try Again" onPress={tryAgain} btnStyle={styles.btn} />
      <Button title="Save Score" onPress={tryAgain} />
    </View>
  )
}

export default Result