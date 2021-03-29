import logo from "./logo.svg";
import "./App.css";
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
import Navbar from './Shared/layouts/Navbar';
import { Landing } from './Shared/landing/pages/Landing';

import { Profiles } from './Profiles/pages/Profiles';
import setAuthToken from './utils/setAuthToken';



import { Provider } from 'react-redux';
import store from './store';
import Alert from './Shared/layouts/Alert';
import Chat from './Shared/layouts/Chat';
import Messages from './Messages/pages/Messages';
import { loadUser } from './actions/auth';
import PrivateRoute from "./routing/PrivateRoute";
import { Profile } from "./Profile/Pages/Profile";
import Me from "./Me/pages/Me";
import CreateProfile from "./Me/components/CreateProfile";


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
              <PrivateRoute exact path="/myprofile" component={Profile} />
              <PrivateRoute exact path="/me" component={Me} />
              <PrivateRoute exact path="/create-profile" component={CreateProfile} />
              <Route exact path="/forum" component={Forum} />
              <Route exact path="/profiles" component={Profiles} />
              <PrivateRoute exact path="/messages" component={Messages} />
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
