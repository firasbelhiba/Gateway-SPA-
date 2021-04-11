import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';


const Item = ({ profile: { user: { _id, name, avatar }, status, company, location } }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="company_profile_info">
                <div className="company-up-info">
                    <img src={avatar} alt="" />
                    <h3>{name}</h3>
                    <h4>{status}</h4>
                    <ul>
                        <li><a href="#" title="" className="follow">Follow</a></li>
                        <li>
                            <a href="#" title="" className="message-us"
                            ><i className="fa fa-envelope"></i></a>
                        </li>
                        <li><a href="#" title="" className="hire-us">Hire</a></li>
                    </ul>
                </div>
                <a href="user-profile.html" title="" className="view-more-pro">View Profile</a>
            </div>
        </div>
    )
}

Item.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default Item;
