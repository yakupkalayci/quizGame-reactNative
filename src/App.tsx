import DefaultLayout from './layouts/DefaultLayout';
import Router from './navigation/Router';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </Provider>
  );
}

export default App;
