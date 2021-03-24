import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Signup from './Authentification/Sign up/Pages/Signup';
import Signin from './Authentification/Sign in/Pages/Signin';
import Forum from './Forum/pages/Forum';

import { Fragment, useEffect } from 'react';
import { Navbar } from './Shared/layouts/Navbar';
import { Landing } from './Shared/landing/pages/Landing';

import { Profile } from './Profile/Pages/Profile';
import { Profiles } from './Profiles/pages/Profiles';
import setAuthToken from './utils/setAuthToken';



import { Provider } from 'react-redux';
import store from './store';
import Alert from './Shared/layouts/Alert';
import Chat from './Shared/layouts/Chat';
import Messages from './Messages/pages/Messages';
import { loadUser } from './actions/auth';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}



function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />

          <section className="">
            <Alert />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/me" component={Profile} />
              <Route exact path="/forum" component={Forum} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/messages" component={Messages} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/signin" component={Signin} />
            </Switch>
            <Chat />
          </section>


        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
