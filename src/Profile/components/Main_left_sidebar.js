import React, { useState } from 'react'
import axios from 'axios'
import { Base64 } from 'js-base64';
import { updateProfilePicture } from '../../actions/profile'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Css/Main_left_sidebar.css';
import Following_pop_up from '../../Forum/components/Pop-up/Following_pop_up';
import Followers_pop_up from '../../Forum/components/Pop-up/Followers_pop_up';


const Main_left_sidebar = ({ avatar
    , numberOfFollowing
    , numberOfFollowers
    , website
    , facebook
    , instagram
    , twitter
    , youtube
    , updateProfilePicture
    , showActions
    , following
    , followers
}) => {

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


    const uploadImage = (files) => {
        let file = files[0];
        let formData = new FormData()
        formData.append('image', file)
        updateProfilePicture(formData);
    }

    return (
        <div className="main-left-sidebar">
            <div className="user_profile">
                <div className="user-pro-img">
                    <div className="box small">
                        <img className="profile_pic" src={avatar} alt="" />
                    </div>
                    {showActions &&
                        (<div className="add-dp" >
                            <input type="file" onChange={(e) => uploadImage(e.target.files)} id="OpenImgUpload" />
                            <label htmlFor="OpenImgUpload"><i className="fas fa-camera"></i></label>
                        </div>)
                    }
                </div>
                <div className="user_pro_status">
                    <ul className="flw-status">
                        <li>
                            <span onClick={() => toggleStateFollowing("following")} style={{ cursor: 'pointer' }}>Following</span>
                            <b onClick={() => toggleStateFollowing("following")} style={{ cursor: 'pointer' }}>{numberOfFollowing}</b>
                        </li>
                        <li>
                            <span onClick={() => toggleStateFollowers("followers")} style={{ cursor: 'pointer' }}>Followers</span>
                            <b onClick={() => toggleStateFollowers("followers")} style={{ cursor: 'pointer' }}>{numberOfFollowers}</b>
                        </li>
                    </ul>
                </div>
                <ul className="social_links">
                    <li>
                        <a href={website} title=""
                        ><i className="la la-globe"></i>{website}</a>
                    </li>
                    <li>
                        <a href={facebook} title=""
                        ><i className="fa fa-facebook-square"></i>{facebook}</a>
                    </li>
                    <li>
                        <a href={twitter} title=""
                        ><i className="fa fa-twitter"></i>{twitter}</a>
                    </li>

                    <li>
                        <a href={instagram} title=""
                        ><i className="fa fa-instagram"></i>{instagram}</a>
                    </li>
                    <li>
                        <a href={youtube} title=""
                        ><i className="fa fa-youtube"></i>{youtube}</a>
                    </li>
                </ul>
            </div>

            <div className={`post-popup job_post ${classActiveCloseFollowing}`}>
                <div className="post-project" >
                    <h3>People who you are following </h3>
                    <Following_pop_up following={following} />
                    <a onClick={() => toggleStateFollowing("")} title="">
                        <i className="la la-times-circle-o" style={{ color: "#153b44" }}></i>
                    </a>
                </div>
            </div>
            <div className={`post-popup job_post ${classActiveCloseFollowers}`}>
                <div className="post-project" >
                    <h3>People who follows you </h3>
                    <Followers_pop_up followers={followers} />
                    <a onClick={() => toggleStateFollowers("")} title="">
                        <i className="la la-times-circle-o" style={{ color: "#153b44" }}></i>
                    </a>
                </div>
            </div>

        </div>
    )
}


Main_left_sidebar.propTypes = {
    updateProfilePicture: PropTypes.func.isRequired,
};

Main_left_sidebar.defaultProps = {
    showActions: true,
};


export default connect(null, { updateProfilePicture })(Main_left_sidebar)

