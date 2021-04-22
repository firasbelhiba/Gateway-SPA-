import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Following_pop_up from "../components/Pop-up/Following_pop_up";
import Followers_pop_up from "../components/Pop-up/Followers_pop_up";



const User_data = ({ thisProfile }) => {
  let classActiveCloseFollowing = "";
  let classActiveCloseFollowers = "";

  const [formStateFollowing, toggleStateFollowing] = useState("");
  const [formStateFollowers, toggleStateFollowers] = useState("");


  if (formStateFollowing === "following") {
    classActiveCloseFollowing = "active";
  }

  if (formStateFollowing === "") {
    classActiveCloseFollowing = "";
  }

  if (formStateFollowers === "followers") {
    classActiveCloseFollowers = "active";
  }

  if (formStateFollowers === "") {
    classActiveCloseFollowers = "";
  }


  return (
    <Fragment>
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
            <h4 onClick={() => toggleStateFollowing("following")} style={{ cursor: 'pointer' }}  >Following</h4>
            <span onClick={() => toggleStateFollowing("following")} style={{ cursor: 'pointer' }}  >{thisProfile.following.length}</span>
          </li>
          <li>
            <h4 onClick={() => toggleStateFollowers("followers")} style={{ cursor: 'pointer' }}>Followers</h4>
            <span onClick={() => toggleStateFollowers("followers")} style={{ cursor: 'pointer' }}>{thisProfile.follwers.length}</span>
          </li>
          <li>
            <Link to="/myprofile" title="">
              View Profile
          </Link>
          </li>
        </ul>
      </div>
      <div className={`post-popup job_post ${classActiveCloseFollowing}`}>
        <div className="post-project" >
          <h3>People who you are following </h3>
          <Following_pop_up following={thisProfile.following} />
          <a onClick={() => toggleStateFollowing("")} title="">
            <i className="la la-times-circle-o" style={{ color: "#153b44" }}></i>
          </a>
        </div>
      </div>
      <div className={`post-popup job_post ${classActiveCloseFollowers}`}>
        <div className="post-project" >
          <h3>People who follows you </h3>
          <Followers_pop_up followers={thisProfile.follwers} />
          <a onClick={() => toggleStateFollowers("")} title="">
            <i className="la la-times-circle-o" style={{ color: "#153b44" }}></i>
          </a>
        </div>
      </div>
    </Fragment>

  );
};

User_data.propTypes = {
  thisProfile: PropTypes.object.isRequired,

};
export default connect(null)(User_data);
