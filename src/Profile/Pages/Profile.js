import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Bids_profile } from "../components/Bids_profile";
import Cover_picture from "../components/Cover_picture";
import { Feed_profile } from "../components/Feed_profile";
import { Info_profile } from "../components/Info_profile";
import { Jobs_profile } from "../components/Jobs_profile";
import Main_left_sidebar from "../components/Main_left_sidebar";
import { People_viewed_profile } from "../components/People_viewed_profile";
import { Portfolio_profile } from "../components/Portfolio_profile";
import { Profile_header } from "../components/Profile_header";
import { Settings } from "../components/Settings";
import { Profile_navigation_bar } from "../components/Profile_navigation_bar";
import { Loading_spinner } from "../../Shared/layouts/Loading_spinner";
import { Review_profile } from "../components/Review_profile";
import { Widget_portfolio } from "../components/Widget_portfolio";
import { Overview_form } from "../components/Forms/Overview_form";
import { Location_form } from "../components/Forms/Location_form";
import { Skills_form } from "../components/Forms/Skills_form";
import { getCurrentProfile } from "../../actions/profile";
import Experience_form from "../components/Forms/Experience_form";
import Edit_Profile from "../components/Edit_Profile";
import Education_form from "../components/Forms/Education_form";
import Profile_Github from "../components/Profile_Github";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SimpleReactLightbox from "simple-react-lightbox";




const Profile = ({
  getCurrentProfile,
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);


  const [id, setId] = useState("feed");

  let thisUser = JSON.parse(localStorage.getItem("user"));
  let myProfile = JSON.parse(localStorage.getItem("profile"));

  return loading && profile === null ? (
    <Loading_spinner />
  ) : (
    <Fragment>
      <ToastContainer />
      <div className="wrapper">
        <Cover_picture cover={myProfile.cover_image} />
        <main>
          <div className="main-section">
            <div className="container">
              <div className="main-section-data">
                <div className="row">
                  <div className="col-lg-3">
                    <Main_left_sidebar
                      avatar={myProfile.avatar}
                      numberOfFollowers={myProfile.follwers.length}
                      numberOfFollowing={myProfile.following.length}
                      followers={myProfile.follwers}
                      following={myProfile.following}
                      youtube={myProfile.social.youtube}
                      linkedin={myProfile.social.linkedin}
                      facebook={myProfile.social.facebook}
                      instagram={myProfile.social.instagram}
                      twitter={myProfile.social.twitter}
                      website={myProfile.website}
                    />
                    {myProfile.githubusername && (
                      <Profile_Github username={myProfile.githubusername} />
                    )}
                    <People_viewed_profile />
                  </div>
                  <div className="col-lg-6">
                    <div className="main-ws-sec">
                      <div className="user-tab-sec rewivew">
                        <Profile_header
                          name={myProfile.name}
                          status={myProfile.status}
                        />
                        <div className="tab-feed st2 settingjb">
                          <ul>
                            <li onClick={() => setId("feed")} className="">
                              <a title="">
                                <img src="assets/images/ic1.png" alt="" />
                                <span>Feed</span>
                              </a>
                            </li>
                            <li onClick={() => setId("info")}>
                              <a title="">
                                <img src="assets/images/ic2.png" alt="" />
                                <span>Info</span>
                              </a>
                            </li>
                            <li onClick={() => setId("jobs")}>
                              <a title="">
                                <img src="assets/images/ic4.png" alt="" />
                                <span>Jobs</span>
                              </a>
                            </li>
                            <li onClick={() => setId("bids")}>
                              <a title="">
                                <img src="assets/images/ic5.png" alt="" />
                                <span>Bids</span>
                              </a>
                            </li>
                            <li onClick={() => setId("portfolio")}>
                              <a title="">
                                <img src="assets/images/ic3.png" alt="" />
                                <span>Portfolio</span>
                              </a>
                            </li>
                            <li onClick={() => setId("reviews")}>
                              <a title="">
                                <img src="assets/images/review.png" alt="" />
                                <span>Reviews</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {id === "feed" && (
                        <Feed_profile sharedList={myProfile.shared} />
                      )}
                      {id === "info" && (
                        <Info_profile
                          intrests={myProfile.intrests}
                          bio={myProfile.bio}
                          experience={myProfile.experience}
                          location={myProfile.location}
                          skills={myProfile.skills}
                          education={myProfile.education}
                          volunteer={myProfile.Volunteer}
                          certification={myProfile.certification}
                        />
                      )}
                      {id === "jobs" && <Jobs_profile />}
                      {id === "bids" && <Bids_profile />}
                      {id === "portfolio" && (
                        <SimpleReactLightbox>
                          <Portfolio_profile portfolio={myProfile.portfolio} />
                        </SimpleReactLightbox>
                      )}
                      {id === "reviews" && <Review_profile />}
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="right-sidebar">
                      <Settings />
                      <Edit_Profile />
                      <Widget_portfolio portfolio={myProfile.portfolio} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Overview_form />
        <Location_form />
        <Skills_form />
      </div>
    </Fragment>
  );
};

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);
