import { Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';

import styles from '../../assets/styles/Button.style';

interface ButtonProps {
  title: string;
  onPress: () => void;
  btnStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

function Button(props: ButtonProps) {
    // destruct props
  const { title, onPress, btnStyle, titleStyle } = props;

  return (
    <TouchableOpacity onPress={() => onPress()} style={btnStyle ? [styles.btn, btnStyle] : styles.btn}>
        <Text style={titleStyle ? [styles.btnText, titleStyle] : styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;