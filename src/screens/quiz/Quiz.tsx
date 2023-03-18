import { useState } from 'react';
import { View } from 'react-native'
import Question from '../../components/question/Question';
import RadioGroup from '../../components/radio/RadioGroup'
import NextButton from './_partials/NextButton';

import styles from '../../assets/styles/Quiz.style';

function Quiz({navigation}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState();

  const questions = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?'
    },
    {
      id: 2,
      text: 'Lorem ipsum?'
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet?'
    }
  ];

  const options = [
    {
      id: 1,
      text: 'true'
    },
    {
      id: 2,
      text: 'false'
    }
  ];

  const handleSelect = (value) => {
    setSelected(value);
  }

  const handleNext = () => {
    if(index + 1 <= questions.length - 1) {
      if(selected) {
        setIndex((prev) => prev + 1);
      } else {
        console.log('Please answer the question!');
      }
    } else {
      navigation.navigate('Result');
    }
  }

  return (
    <View style={styles.container}>
      <Question questions={questions} index={index} />
      <RadioGroup data={options} selected={selected} onSelect={handleSelect} />
      <NextButton onPress={handleNext} />
    </View>
  )
}

export default Quiz