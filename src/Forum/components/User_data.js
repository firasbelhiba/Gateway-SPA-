import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const User_data = ({ thisProfile }) => {
  return (
    <div className="user-data full-width">
      <div className="user-profile">
        <div className="username-dt">
          <div className="usr-pic">
            <img src={thisProfile.user.avatar} alt="" />
          </div>
        </div>
        <div className="user-specs">
          <h3>{thisProfile.user.name}</h3>
          <span>{thisProfile.status}</span>
        </div>
      </div>
      <ul className="user-fw-status">
        <li>
          <h4>Following</h4>
          <span>{thisProfile.following.length}</span>
        </li>
        <li>
          <h4>Followers</h4>
          <span>{thisProfile.follwers.length}</span>
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
  thisProfile: PropTypes.object.isRequired,

};
export default connect(null)(User_data);
