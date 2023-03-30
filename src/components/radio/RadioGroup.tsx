import { View, Text, TouchableOpacity } from 'react-native';

import { option } from '../../common/constants/question/options';

import styles from '../../assets/styles/RadioGroup.style';

interface RadioGroupProps {
  data: option[];
  onSelect?: (value) => void;
  selected?: string;
}

export default function RadioGroup(props: RadioGroupProps) {
  // destruct props
  const { data, onSelect, selected } = props;

  return (
    <View style={styles.container}>
        {
            data?.map((item) => (
                <TouchableOpacity key={item.id} style={styles.radioItem} onPress={() => onSelect ? onSelect(item.text): null}>
                    <View style={selected === item.text ? [styles.selectBox, styles.selected] : styles.selectBox}></View>
                    <Text style={styles.text}>{item.text}</Text>
                </TouchableOpacity>
            ))
        }
    </View>
  );
}
