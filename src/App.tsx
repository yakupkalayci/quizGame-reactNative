import DefaultLayout from './layouts/DefaultLayout';
import Router from './navigation/Router';


function App(): JSX.Element {
  return (
    <DefaultLayout>
      <Router />
    </DefaultLayout>
  );
}

export default App;
