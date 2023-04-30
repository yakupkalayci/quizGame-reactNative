import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NextBtnTitles } from '../../../common/constants/button/titles';

import styles from '../../../assets/styles/NextButton.style';

interface NextButtonProps {
  onPress: () => void;
  title: NextBtnTitles
}

export default function NextButton(props: NextButtonProps) {
  // destruct props
  const { onPress, title } = props;

  return (
    <View style={{ alignSelf: 'flex-end', marginRight: 40, marginTop: 20 }}>
      <TouchableOpacity style={styles.btn} onPress={() => onPress()}>
        <Text style={styles.btnText}>{title}</Text>
        <Icon name="long-arrow-right" iconStyle={styles.iconStyle} color="white" size={17} />
      </TouchableOpacity>
    </View>
  );
}
