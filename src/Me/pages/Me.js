import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'
import { Loading_spinner } from '../../Shared/layouts/Loading_spinner'
import User_Status from '../components/User_Status'

const Me = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {

    useEffect(() => {
        getCurrentProfile();
    }, []);

    return (
        loading && profile === null ? (<Loading_spinner />) : (
            <Fragment>

                {profile !== null ?
                    (
                        <Fragment>
                            <User_Status
                                name={user && user.name}
                                status={profile.status}
                            />
                        </Fragment>
                    ) :
                    (
                        <Fragment>
                            has not
                        </Fragment>)}
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
