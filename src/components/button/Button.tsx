import { Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';

import styles from '../../assets/styles/Button.style';

interface ButtonProps {
  title: string;
  onPress: any;
  btnStyle?: ViewStyle;
  titleStyle?: TextStyle;
  disabled?: boolean;
}

function Button(props: ButtonProps) {
    // destruct props
  const { title, onPress, btnStyle, titleStyle, disabled } = props;

  const adjustStyle = () => {
    if(btnStyle) {
      if(disabled)  return [styles.btn, btnStyle, styles.disabled]
      return [styles.btn, btnStyle];
    }
    if(disabled) {
      return [styles.btn, styles.disabled]
    }
    return styles.btn;
  }

  return (
    <TouchableOpacity onPress={() => disabled ? null : onPress() } style={adjustStyle()}>
        <Text style={titleStyle ? [styles.btnText, titleStyle] : styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;