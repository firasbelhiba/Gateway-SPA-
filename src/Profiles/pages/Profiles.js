import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loading_spinner } from '../../Shared/layouts/Loading_spinner';
import { getAllProfiles } from '../../actions/profile';
import Item from '../components/Item'

const Profiles = ({ getAllProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getAllProfiles();
    }, [])
    return <Fragment>
        {loading ? <Loading_spinner /> :
            <Fragment>
                <section className="companies-info">
                    {profiles.length > 0 ? (<div className="container">
                        <div className="company-title">
                            <h3>All Profiles</h3>
                        </div>
                        <div className="companies-list">
                            <div className="row">
                                {profiles.map(profile => (
                                    <Item key={profile._id} profile={profile} />
                                ))}
                            </div>
                        </div>
                    </div>) : <h3>No profiles found ... </h3>}
                </section>
            </Fragment>}
    </Fragment>
}

Profiles.propTypes = {
    getAllProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile
});

export default connect(mapStateToProps, { getAllProfiles })(Profiles);
