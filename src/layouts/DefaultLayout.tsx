// React
import { SafeAreaView, View } from 'react-native';

// Components
import Header from './header/Header';

// Style
import styles from '../assets/styles/DefaultLayout.style';

export default function DefaultLayout(props): JSX.Element {
  // destruct props
  const { children } = props;

  return (
    <SafeAreaView style={styles.appContainer}>
      <Header />
      <View style={styles.mainContent}>{children}</View>
    </SafeAreaView>
  );
}
