import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './useNavigate';

import Intro from '../screens/intro/Intro';
import Quiz from '../screens/quiz/Quiz';
import Result from '../screens/result/Result';

const Stack = createNativeStackNavigator();

function Router(): JSX.Element {
  return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Quiz" component={Quiz} />
          <Stack.Screen name="Result" component={Result} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default Router;
