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
import Chat from './Shared/layouts/Chat';
import Messages from './Messages/pages/Messages';
import { loadUser } from './actions/auth';
import PrivateRoute from "./routing/PrivateRoute";
import Profile from "./Profile/Pages/Profile";
import Me from "./Me/pages/Me";
import CreateProfile from "./Me/components/CreateProfile";
import Profile_edit_form from "./Profile/components/Forms/Profile_edit_form";
import { Jobs } from './Jobs/pages/Jobs'
import QuestionsSection from "./Q&A/pages/QuestionsSection";
import QuestionDetails from "./Q&A/pages/QuestionDetails";
import Experience_form from "./Profile/components/Forms/Experience_form";
import Education_form from "./Profile/components/Forms/Education_form";
import Volunteer_form from "./Profile/components/Forms/Volunteer_form";
import Certification_form from "./Profile/components/Forms/Certification_form";

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
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/forum" component={Forum} />
              <Route exact path="/jobs" component={Jobs} />
              <Route exact path="/q_and_a" component={QuestionsSection} />
              <Route exact path="/question_details" component={QuestionDetails} />

              <PrivateRoute exact path="/myprofile" component={Profile} />
              <PrivateRoute exact path="/me" component={Me} />
              <PrivateRoute exact path="/create-profile" component={CreateProfile} />
              <PrivateRoute exact path="/edit-profile" component={Profile_edit_form} />
              <PrivateRoute exact path="/create-experience" component={Experience_form} />
              <PrivateRoute exact path="/create-education" component={Education_form} />
              <PrivateRoute exact path="/create-volunteer" component={Volunteer_form} />
              <PrivateRoute exact path="/create-certification" component={Certification_form} />
              <PrivateRoute exact path="/messages" component={Messages} />
            </Switch>
            <Chat />
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
