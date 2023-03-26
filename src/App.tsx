import DefaultLayout from './layouts/DefaultLayout';
import Router from './navigation/Router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { AlertNotificationRoot } from 'react-native-alert-notification';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AlertNotificationRoot theme='dark'>
        <DefaultLayout>
          <Router />
        </DefaultLayout>
      </AlertNotificationRoot>
    </Provider>
  );
}

export default App;
