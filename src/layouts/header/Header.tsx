// React
import { SafeAreaView, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

// Partials
import Stats from './_partials/Stats';

// Style
import styles from '../../assets/styles/Header.style';

function Header() {
  const screen = useSelector((state:RootState) => state.user.screen);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} style={styles.image} />
      {screen === 'quiz' && <Stats />}
    </SafeAreaView>
  );
}

export default Header;
