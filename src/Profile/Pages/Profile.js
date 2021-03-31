import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Bids_profile } from '../components/Bids_profile'
import { Cover_picture } from '../components/Cover_picture'
import { Feed_profile } from '../components/Feed_profile'
import { Info_profile } from '../components/Info_profile'
import { Jobs_profile } from '../components/Jobs_profile'
import { Main_left_sidebar } from '../components/Main_left_sidebar'
import { Payment_profile } from '../components/Payment_profile'
import { People_viewed_profile } from '../components/People_viewed_profile'
import { Portfolio_profile } from '../components/Portfolio_profile'
import { Profile_header } from '../components/Profile_header'
import { Settings } from '../components/Settings'
import { Profile_navigation_bar } from '../components/Profile_navigation_bar'
import { Loading_spinner } from '../../Shared/layouts/Loading_spinner';
import { Review_profile } from '../components/Review_profile'
import { Widget_portfolio } from '../components/Widget_portfolio'
import { Overview_form } from '../components/Forms/Overview_form'
import { Location_form } from '../components/Forms/Location_form'
import { Skills_form } from '../components/Forms/Skills_form'
import { Portfolio_form } from '../components/Forms/Portfolio_form'
import { getCurrentProfile } from '../../actions/profile';
import Experience_form from '../components/Forms/Experience_form'
import Edit_Profile from '../components/Edit_Profile'
import Education_form from '../components/Forms/Education_form'



const Profile = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {

    useEffect(() => {
        getCurrentProfile();
    }, []);

    const [id, setId] = useState("feed");


    return loading && profile === null ? <Loading_spinner />
        : <Fragment>
            <div className="wrapper">
                <Cover_picture />
                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <Main_left_sidebar
                                            avatar={user.avatar}
                                            numberOfFollowers={profile.follwers.length}
                                            numberOfFollowing={profile.following.length}
                                            youtube={profile.social.youtube}
                                            linkedin={profile.social.linkedin}
                                            facebook={profile.social.facebook}
                                            instagram={profile.social.instagram}
                                            twitter={profile.social.twitter}
                                            website={profile.website}
                                        />
                                        <People_viewed_profile />
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="main-ws-sec">
                                            <div className="user-tab-sec rewivew">
                                                <Profile_header
                                                    name={user.name}
                                                    status={profile.status}
                                                />
                                                <div className="tab-feed st2 settingjb">
                                                    <ul>
                                                        <li onClick={() => setId("feed")} className="">
                                                            <a title="">
                                                                <img src="assets/images/ic1.png" alt="" />
                                                                <span>Feed</span>
                                                            </a>
                                                        </li>
                                                        <li onClick={() => setId("info")} >
                                                            <a title="">
                                                                <img src="assets/images/ic2.png" alt="" />
                                                                <span>Info</span>
                                                            </a>
                                                        </li>
                                                        <li onClick={() => setId("jobs")} >
                                                            <a title="">
                                                                <img src="assets/images/ic4.png" alt="" />
                                                                <span>Jobs</span>
                                                            </a>
                                                        </li>
                                                        <li onClick={() => setId("bids")} >
                                                            <a title="">
                                                                <img src="assets/images/ic5.png" alt="" />
                                                                <span>Bids</span>
                                                            </a>
                                                        </li>
                                                        <li onClick={() => setId("portfolio")} >
                                                            <a title="">
                                                                <img src="assets/images/ic3.png" alt="" />
                                                                <span>Portfolio</span>
                                                            </a>
                                                        </li>
                                                        <li onClick={() => setId("reviews")} >
                                                            <a title="">
                                                                <img src="assets/images/review.png" alt="" />
                                                                <span>Reviews</span>
                                                            </a>
                                                        </li>
                                                        <li onClick={() => setId("payment")}>
                                                            <a title="">
                                                                <img src="assets/images/ic6.png" alt="" />
                                                                <span>Payment</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {id === "feed" && <Feed_profile />}
                                            {id === "info" && <Info_profile
                                                intrests={profile.intrests}
                                                bio={profile.bio}
                                                experience={profile.experience}
                                                location={profile.location}
                                                skills={profile.skills}
                                                education={profile.education} />}
                                            {id === "jobs" && <Jobs_profile />}
                                            {id === "bids" && <Bids_profile />}
                                            {id === "portfolio" && <Portfolio_form />}
                                            {id === "reviews" && <Review_profile />}
                                            {id === "payment" && <Payment_profile />}

                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="right-sidebar">
                                            <Settings />
                                            <Edit_Profile />
                                            <Widget_portfolio />
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
                <Portfolio_form />
            </div>


        </Fragment>
}

Profile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile })(Profile)
