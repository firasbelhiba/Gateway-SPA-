import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const User_data = ({ user, profile }) => {
  return (
    <div className="user-data full-width">
      <div className="user-profile">
        <div className="username-dt">
          <div className="usr-pic">
            <img src="" alt="" />
          </div>
        </div>
        <div className="user-specs">
          <h3>John Doe</h3>
          <span>Graphic Designer at Self Employed</span>
        </div>
      </div>
      <ul className="user-fw-status">
        <li>
          <h4>Following</h4>
          <span>34</span>
        </li>
        <li>
          <h4>Followers</h4>
          <span>{profile.status}</span>
        </li>
        <li>
          <Link to="/myprofile" title="">
            View Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

User_data.propTypes = {
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,

};
export default connect(null)(User_data);
