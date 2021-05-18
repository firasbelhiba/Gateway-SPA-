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
import { Skills_form } from '../../Profile/components/Forms/Skills_form';
import { Info_profile } from '../../Profile/components/Info_profile';
import { Jobs_profile } from '../../Profile/components/Jobs_profile';
import Main_left_sidebar from '../../Profile/components/Main_left_sidebar';
import Profile_Github from '../../Profile/components/Profile_Github';
import { Profile_header } from '../../Profile/components/Profile_header';
import Review_profile from '../../Profile/components/Review_profile';
import { Widget_portfolio } from '../../Profile/components/Widget_portfolio';
import { Loading_spinner } from '../../Shared/layouts/Loading_spinner';
import { Link, useLocation } from "react-router-dom";
import { getProfileById } from "../../actions/profile";
import { useEffect } from 'react';
import Follow from '../components/Follow';
import { Portfolio_profile } from '../../Profile/components/Portfolio_profile';
import Report_profile from '../components/Report_profile'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Profileby = ({ getProfileById, profile: { this_profile, loading }, showActions }) => {

    let query = useQuery();

    let thisProfile = JSON.parse(localStorage.getItem('this_profile'));
    let myProfile = JSON.parse(localStorage.getItem('profile'))

    useEffect(() => {
        getProfileById(query.get("id"));
    }, [getProfileById]);

    const [id, setId] = useState("feed");


    return loading && this_profile === null ? (<Loading_spinner />) : (
        <Fragment>
            <div className="wrapper">
                <Cover_picture
                    cover={thisProfile.cover_image}
                    showActions={false}
                />
                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <Main_left_sidebar
                                            avatar={thisProfile.avatar}
                                            numberOfFollowers={thisProfile.follwers.length}
                                            numberOfFollowing={thisProfile.following.length}
                                            followers={thisProfile.follwers}
                                            following={thisProfile.following}
                                            youtube={thisProfile.social.youtube}
                                            linkedin={thisProfile.social.linkedin}
                                            facebook={thisProfile.social.facebook}
                                            instagram={thisProfile.social.instagram}
                                            twitter={thisProfile.social.twitter}
                                            website={thisProfile.website}
                                            showActions={false}
                                        />
                                        {thisProfile.githubusername && (
                                            <Profile_Github username={thisProfile.githubusername} />
                                        )}
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="main-ws-sec">
                                            <div className="user-tab-sec rewivew">
                                                <Profile_header
                                                    name={thisProfile.user.name}
                                                    status={thisProfile.status}
                                                />
                                                <div class Name="tab-feed st2 settingjb">
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
                                            {id === "bids" && <Bids_profile score={thisProfile.score} />}
                                            {id === "portfolio" && <Portfolio_profile portfolio={thisProfile.portfolio} />}
                                            {id === "reviews" && <Review_profile
                                                avatar={myProfile.avatar}
                                                reviews={thisProfile.reviews}
                                                showActions={true}
                                                id={thisProfile._id}
                                                hisName={thisProfile.name}
                                                myName={myProfile.name} />}
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="right-sidebar">
                                            <Follow id={thisProfile._id}
                                                id_user={thisProfile.user._id}
                                                followers={thisProfile.follwers} />
                                            <Report_profile id={thisProfile._id} />
                                            <Widget_portfolio portfolio={thisProfile.portfolio} />
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
}


Profileby.propTypes = {
    getProfileById: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    profile: state.profile,
});


export default connect(mapStateToProps, { getProfileById })(Profileby)
