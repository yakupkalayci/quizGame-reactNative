import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../../assets/styles/RadioGroup.style';

interface RadioGroupProps {
  data: any[];
  onSelect: (value) => void;
  selected?: any;
}

export default function RadioGroup(props: RadioGroupProps) {
  const { data, onSelect, selected } = props;

  return (
    <View style={styles.container}>
        {
            data?.map((item) => (
                <TouchableOpacity key={item.id} style={styles.radioItem} onPress={() => onSelect(item.text)}>
                    <View style={selected === item.text ? [styles.selectBox, styles.selected] : styles.selectBox}></View>
                    <Text style={styles.text}>{item.text}</Text>
                </TouchableOpacity>
            ))
        }
    </View>
  );
}
