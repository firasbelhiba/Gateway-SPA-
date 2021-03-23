import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Signup from "./Authentification/Sign up/Pages/Signup";
import Signin from "./Authentification/Sign in/Pages/Signin";
import Forum from "./Forum/pages/Forum";
import { Fragment } from "react";
import { Navbar } from "./Shared/layouts/Navbar";
import { Landing } from "./Shared/landing/pages/Landing";

import { Profile } from "./Profile/Pages/Profile";
import { Profiles } from "./Profiles/pages/Profiles";

import { Provider } from "react-redux";
import store from "./store";
import Alert from "./Shared/layouts/Alert";

function App() {
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
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/signin" component={Signin} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
