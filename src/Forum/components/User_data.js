import React from "react";
import { Link } from "react-router-dom";

const User_data = (props) => {
  return (
    <div className="user-data full-width">
      <div className="user-profile">
        <div className="username-dt">
          <div className="usr-pic">
            <img src="assets/images/resources/user-pic.png" alt="" />
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
          <span>155</span>
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

export default User_data;
