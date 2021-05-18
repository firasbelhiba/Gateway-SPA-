import { Fragment, useEffect } from "react";
import PrivateRoute from "./routing/PrivateRoute";

//Redux
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Authentification
import Signup from "./Authentification/Sign up/Pages/Signup";
import Signin from "./Authentification/Sign in/Pages/Signin";
import Register_with_google from "./Authentification/Register with google/pages/Register_with_google";
import Register_with_facebook from "./Authentification/Register with facebook/pages/Register_with_facebook";
import Register_with_github from "./Authentification/Register with github/pages/Register_with_github";
import Register_with_linkedin from "./Authentification/Register with linkedin/pages/Register_with_linkedin";
import Forget_you_password from "./Authentification/Forget your Password/Pages/Forget_your_password";
import New_password from "./Authentification/New Password/Pages/New_password";

//Layouts
import Navbar from "./Shared/layouts/Navbar";
import Notfound from "./Shared/layouts/Notfound";
import { Landing } from "./Shared/landing/pages/Landing";

import Profiles from "./Profiles/pages/Profiles";
import Messages from "./Messages/pages/Messages";
import Forum from "./Forum/pages/Forum";
import Profile from "./Profile/Pages/Profile";
import Me from "./Me/pages/Me";
import CreateProfile from "./Me/components/CreateProfile";
import Portfolio_form from "./Profile/components/Forms/Portfolio_form";
import Profile_edit_form from "./Profile/components/Forms/Profile_edit_form";
import { Jobs } from "./Jobs/pages/Jobs";
import QuestionsSection from "./Q&A/pages/QuestionsSection";
import QuestionDetails from "./Q&A/pages/QuestionDetails";
import Experience_form from "./Profile/components/Forms/Experience_form";
import Education_form from "./Profile/components/Forms/Education_form";
import Volunteer_form from "./Profile/components/Forms/Volunteer_form";
import Certification_form from "./Profile/components/Forms/Certification_form";
import Report_Form from "./Forum/components/Form/Report_Form";
import This_post from "./Forum/pages/This_post";
import Send_post_mail from "./Forum/components/Form/Send_post_mail";
import Testchat from "./Testchat";
import Profileby from "./Profileby/pages/Profileby";
import Post_form from "./Forum/components/Form/Post_form";
import Education_edit_form from "./Profile/components/Forms/Education_edit_form";
import Volunteer_edit_form from "./Profile/components/Forms/Volunteer_edit_form";
import Certification_edit_form from "./Profile/components/Forms/Certification_edit_form";
import Settings from "./settings/pages/Settings";
import Forum_visitor from "./Forum_Visitor/pages/Forum_visitor";
import Video from "./Jobs/video/Video";
import QuizCategories from "./Jobs/Quiz/QuizCategories";
import News from "./Jobs/News/News.js";

// Alert Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Utilities & functions
import { loadUser } from "./actions/auth";
import {
  getAllProfiles,
  getCurrentProfile,
  getSuggestions,
  getMostViewedProfiles,
  getMostTalentedPeople,
} from "./actions/profile";
import setAuthToken from "./utils/setAuthToken";

//Scraping
import {
  getScrapedData,
  getScrapedDataTJ,
  getScrapedDataIndeed,
  getScrapedDataFreecourse,
  getScrapedDataEdx,
} from "./actions/scraping";

//Css
import "./App.css";
import AllQuestions from "./Q&A/pages/AllQuestions";
import PopularQuestions from "./Q&A/pages/PopularQuestions";
import DomainsSection from "./Q&A/pages/DomainsSection";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getCurrentProfile());
    store.dispatch(getAllProfiles());
    store.dispatch(getScrapedData());
    store.dispatch(getSuggestions());
    store.dispatch(getMostViewedProfiles());
    store.dispatch(getScrapedDataTJ());
    store.dispatch(getScrapedDataIndeed());
    store.dispatch(getScrapedDataFreecourse());
    store.dispatch(getScrapedDataEdx());
    store.dispatch(getMostTalentedPeople());
    fetch(
      "https://geolocation-db.com/json/f9902210-97f0-11eb-a459-b997d30983f1"
    )
      .then((res) => res.json())
      .then((data) => localStorage.setItem("location", JSON.stringify(data)));
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <section className="">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/test" component={Testchat} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/signin" component={Signin} />
              <Route
                exact
                path="/reset-password"
                component={Forget_you_password}
              />
              <Route exact path="/new-password" component={New_password} />
              <Route
                exact
                path="/login-with-google"
                component={Register_with_google}
              />
              <Route
                exact
                path="/login-with-facebook"
                component={Register_with_facebook}
              />
              <Route
                exact
                path="/login-with-github"
                component={Register_with_github}
              />
              <Route
                exact
                path="/login-with-linkedin"
                component={Register_with_linkedin}
              />

              <Route exact path="/jobs" component={Jobs} />
              <Route exact path="/video" component={Video} />
              <Route exact path="/quiz" component={QuizCategories} />
              <Route exact path="/news" component={News} />
              <Route exact path="/q_and_a" component={QuestionsSection} />
              <Route
                exact
                path="/question_details"
                component={QuestionDetails}
              />
              <Route
                  exact
                  path="/allQuestions"
                  component={AllQuestions}
              />
              <Route
                  exact
                  path="/popular"
                  component={PopularQuestions}
              />
              <Route
                  exact
                  path="/domain"
                  component={DomainsSection}
              />
              <Route exact path="/forum-visitor" component={Forum_visitor} />

              <PrivateRoute exact path="/profiles" component={Profiles} />
              <PrivateRoute exact path="/forum" component={Forum} />
              <PrivateRoute exact path="/myprofile" component={Profile} />
              <PrivateRoute exact path="/me" component={Me} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={Profile_edit_form}
              />
              <PrivateRoute
                exact
                path="/create-experience"
                component={Experience_form}
              />
              <PrivateRoute
                exact
                path="/create-education"
                component={Education_form}
              />
              <PrivateRoute
                exact
                path="/create-volunteer"
                component={Volunteer_form}
              />
              <PrivateRoute
                exact
                path="/create-certification"
                component={Certification_form}
              />
              <PrivateRoute
                exact
                path="/create-portfolio"
                component={Portfolio_form}
              />
              <PrivateRoute
                exact
                path="/edit-education"
                component={Education_edit_form}
              />
              <PrivateRoute
                exact
                path="/edit-volunteer"
                component={Volunteer_edit_form}
              />
              <PrivateRoute
                exact
                path="/edit-certification"
                component={Certification_edit_form}
              />
              <PrivateRoute exact path="/profileby" component={Profileby} />
              <PrivateRoute exact path="/this-post" component={This_post} />
              <PrivateRoute exact path="/edit-post" component={Post_form} />
              <PrivateRoute
                exact
                path="/send-post-email"
                component={Send_post_mail}
              />
              <PrivateRoute exact path="/report-post" component={Report_Form} />
              <PrivateRoute exact path="/messages" component={Messages} />
              <PrivateRoute exact path="/settings" component={Settings} />
              <Route component={Notfound} />
            </Switch>
            <ToastContainer />
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
