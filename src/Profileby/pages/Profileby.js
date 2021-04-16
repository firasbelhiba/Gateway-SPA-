import React from 'react'
import { Fragment } from 'react';
import { useState } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Bids_profile } from '../../Profile/components/Bids_profile';
import Cover_picture from '../../Profile/components/Cover_picture';
import { Feed_profile } from '../../Profile/components/Feed_profile';
import { Location_form } from '../../Profile/components/Forms/Location_form';
import { Overview_form } from '../../Profile/components/Forms/Overview_form';
import { Portfolio_form } from '../../Profile/components/Forms/Portfolio_form';
import { Skills_form } from '../../Profile/components/Forms/Skills_form';
import { Info_profile } from '../../Profile/components/Info_profile';
import { Jobs_profile } from '../../Profile/components/Jobs_profile';
import Main_left_sidebar from '../../Profile/components/Main_left_sidebar';
import { Payment_profile } from '../../Profile/components/Payment_profile';
import Profile_Github from '../../Profile/components/Profile_Github';
import { Profile_header } from '../../Profile/components/Profile_header';
import { Review_profile } from '../../Profile/components/Review_profile';
import { Widget_portfolio } from '../../Profile/components/Widget_portfolio';
import { Loading_spinner } from '../../Shared/layouts/Loading_spinner';
import { Link, useLocation } from "react-router-dom";
import { getProfileById } from "../../actions/profile";
import { useEffect } from 'react';
import Follow from '../components/Follow';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}
console.log("firas")

const Profileby = ({ getProfileById, profile: { this_profile, loading }, showActions }) => {

    let query = useQuery();

    let thisProfile = JSON.parse(localStorage.getItem('this_profile'));

    useEffect(() => {
        getProfileById(query.get("id"));
    }, [getProfileById]);

    const [id, setId] = useState("feed");


    return loading && this_profile === null ? (<Loading_spinner />) : (
        <Fragment>
            <div className="wrapper">
                <Cover_picture cover={thisProfile.cover_image} />
                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <Main_left_sidebar
                                            avatar={thisProfile.user.avatar}
                                            numberOfFollowers={thisProfile.follwers.length}
                                            numberOfFollowing={thisProfile.following.length}
                                            youtube={thisProfile.social.youtube}
                                            linkedin={thisProfile.social.linkedin}
                                            facebook={thisProfile.social.facebook}
                                            instagram={thisProfile.social.instagram}
                                            twitter={thisProfile.social.twitter}
                                            website={thisProfile.website}
                                        />
                                        {/* {profile.githubusername && (
                                            <Profile_Github username={profile.githubusername} />
                                        )} */}
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="main-ws-sec">
                                            <div className="user-tab-sec rewivew">
                                                <Profile_header
                                                    name={thisProfile.user.name}
                                                    status={thisProfile.status}
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
                                                        <li onClick={() => setId("payment")}>
                                                            <a title="">
                                                                <img src="assets/images/ic6.png" alt="" />
                                                                <span>Payment</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {id === "feed" && (
                                                <Feed_profile sharedList={thisProfile.shared} />
                                            )}
                                            {id === "info" && (
                                                <Info_profile
                                                    intrests={thisProfile.intrests}
                                                    bio={thisProfile.bio}
                                                    experience={thisProfile.experience}
                                                    showActions={false}
                                                    location={thisProfile.location}
                                                    skills={thisProfile.skills}
                                                    education={thisProfile.education}
                                                    volunteer={thisProfile.Volunteer}
                                                    certification={thisProfile.certification}
                                                />
                                            )}
                                            {id === "jobs" && <Jobs_profile />}
                                            {id === "bids" && <Bids_profile />}
                                            {id === "portfolio" && <Portfolio_form />}
                                            {id === "reviews" && <Review_profile />}
                                            {id === "payment" && <Payment_profile />}
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="right-sidebar">
                                            <Follow id={thisProfile._id}
                                                id_user={thisProfile.user._id}
                                                followers={thisProfile.follwers} />
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
    );
}


Profileby.propTypes = {
    getProfileById: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    profile: state.profile,
});


export default connect(mapStateToProps, { getProfileById })(Profileby)
