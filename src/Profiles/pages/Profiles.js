import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loading_spinner } from '../../Shared/layouts/Loading_spinner';
import { getAllProfiles } from '../../actions/profile';
import Item from '../components/Item'

const Profiles = ({ getAllProfiles, profile: { profiles, loading } }) => {
    useEffect(() => {
        getAllProfiles();
    }, []);

    const [search, setSearch] = useState("");

    let currentProfile = JSON.parse(localStorage.getItem('profile'))

    let profilesWithoutMine = [];

    for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].user !== currentProfile.user._id)
            profilesWithoutMine.push(profiles[i]);
    }


    return <Fragment>
        {loading ? <Loading_spinner /> :
            <Fragment>
                <div className="search-sec">
                    <div className="container">
                        <div className="search-box">
                            <form>
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Search keywords"
                                    onChange={e => setSearch(e.target.value)}
                                />
                                <button type="submit"><i className="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <section className="companies-info">
                    {profiles.length > 0 ? (<div className="container">

                        <div className="company-title">
                            <h3>All Profiles</h3>
                        </div>
                        <div className="companies-list">
                            <div className="row">
                                {profilesWithoutMine.filter((val) => {
                                    if (search === "") {
                                        return val;
                                    } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                                        return val;
                                    }
                                }).map(profile => (
                                    <Item key={profile._id} profile={profile} />
                                ))}
                            </div>
                        </div>
                    </div>) : <div className="company-title">
                        <h3>No Profiles found yet</h3>
                    </div>}
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
