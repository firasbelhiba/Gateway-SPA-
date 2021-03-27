import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
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
import { Review_profile } from '../components/Review_profile'
import { Widget_portfolio } from '../components/Widget_portfolio'
import { Overview_form } from '../components/Forms/Overview_form'
import { Experience_form } from '../components/Forms/Experience_form'
import { Education_form } from '../components/Forms/Education_form'
import { Location_form } from '../components/Forms/Location_form'
import { Skills_form } from '../components/Forms/Skills_form'
import { Portfolio_form } from '../components/Forms/Portfolio_form'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'
import { Loading_spinner } from '../../Shared/layouts/Loading_spinner'



const Profile = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {

    useEffect(() => {
        getCurrentProfile();
    }, []);

    return loading && profile === null ? <Loading_spinner />
        : <Fragment>
            {profile !== null ?
                (<Fragment>
                    <div className="wrapper">
                        <Cover_picture />
                        <main>
                            <div className="main-section">
                                <div className="container">
                                    <div className="main-section-data">
                                        <div className="row">
                                            <div className="col-lg-3">
                                                <Main_left_sidebar />
                                                <People_viewed_profile />
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="main-ws-sec">
                                                    <div className="user-tab-sec rewivew">
                                                        <Profile_header />
                                                        <div className="tab-feed st2 settingjb">
                                                            <Profile_navigation_bar />
                                                        </div>
                                                    </div>
                                                    <div className="product-feed-tab" id="saved-jobs">
                                                        <Jobs_profile />
                                                    </div>
                                                    <div className="product-feed-tab current" id="feed-dd">
                                                        <Feed_profile />
                                                    </div>
                                                    <div className="product-feed-tab" id="my-bids">
                                                        <Bids_profile />
                                                    </div>
                                                    <div className="product-feed-tab" id="info-dd">
                                                        <Info_profile />
                                                    </div>
                                                    <div className="product-feed-tab" id="rewivewdata">
                                                        <Review_profile />
                                                    </div>
                                                    <div className="product-feed-tab" id="portfolio-dd">
                                                        <Portfolio_profile />
                                                    </div>
                                                    <div className="product-feed-tab" id="payment-dd">
                                                        <Payment_profile />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="right-sidebar">
                                                    <Settings />
                                                    <Widget_portfolio />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>

                        <Overview_form />
                        <Experience_form />
                        <Education_form />
                        <Location_form />
                        <Skills_form />
                        <Portfolio_form />
                    </div>


                </Fragment>) :
                (<Fragment>Ma3andich compte</Fragment>)
            }
        </Fragment>
}

Profile.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});


export default connect(mapStateToProps, { getCurrentProfile })(Profile)
