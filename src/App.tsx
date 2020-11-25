import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import LoginPageContainer from './components/views/LoginPage/LoginPageContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout >
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={LoginPageContainer} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
