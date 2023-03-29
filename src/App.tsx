// Redux
import { Provider } from 'react-redux';
import { store } from './store/store';

// Alert Notification
import { AlertNotificationRoot } from 'react-native-alert-notification';

// Layout
import DefaultLayout from './layouts/DefaultLayout';

// Router
import Router from './navigation/Router';


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
