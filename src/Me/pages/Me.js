import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'
import { Loading_spinner } from '../../Shared/layouts/Loading_spinner'
import User_Status from '../components/User_Status'
import No_Profile from '../components/No_Profile'
import { loadUser } from '../../actions/auth'
import Alert from '../../Shared/layouts/Alert'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Me = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {

    useEffect(() => {
        getCurrentProfile();
    }, []);

    return (
        loading && profile === null ? (<Loading_spinner />) : (
            <Fragment>
                <ToastContainer />
                <Alert />
                <div className="user-data full-width">
                    <div className="user-profile">
                        <div className="usr-pic">
                            <img src={user && user.avatar} alt="" />
                        </div>

                        <div className="user-specs">
                            <h1>Welcome</h1>
                            <i className="fa fa-user mt-2" />
                            <h3>{user && user.name}</h3>
                            {profile !== null ?
                                (
                                    <Fragment>
                                        <User_Status
                                            status={profile.status}
                                        />

                                    </Fragment>
                                ) :
                                (
                                    <Fragment>
                                        <No_Profile loading={loading} />
                                    </Fragment>)}
                        </div>
                    </div>
                </div>
            </Fragment>)
    )
}

Me.propTypes = {
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});


export default connect(mapStateToProps, { getCurrentProfile })(Me);
