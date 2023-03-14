// React
import { SafeAreaView, Image } from 'react-native';

// Style
import styles from '../../assets/styles/Header.style';

function Header() {
  return (
    <SafeAreaView>
      <Image source={require('../../assets/images/logo.png')} style={styles.image} />
    </SafeAreaView>
  );
}

export default Header;
