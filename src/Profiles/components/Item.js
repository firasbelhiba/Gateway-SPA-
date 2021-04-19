import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { getProfileById } from '../../actions/profile';


const Item = ({ profile }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="company_profile_info">
                <div className="company-up-info">
                    <img src={profile.avatar} alt="" />
                    <h3>{profile.name}</h3>
                    <h4>{profile.status}</h4>
                    <h4>score</h4>
                    <div className="user-profy">
                        <Link to={`/profileby?id=${profile.user}`} onClick={() => {
                            getProfileById(profile.user);
                            localStorage.setItem('this_profile', JSON.stringify(profile));

                        }} title="" className="view-more-pro">View Profile</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

Item.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default Item;
