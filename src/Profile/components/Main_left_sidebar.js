import React, { useState } from 'react'
import axios from 'axios'
import { Base64 } from 'js-base64';
import { updateProfilePicture } from '../../actions/profile'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Css/Main_left_sidebar.css';


const Main_left_sidebar = ({ avatar
    , numberOfFollowing
    , numberOfFollowers
    , website
    , facebook
    , instagram
    , twitter
    , youtube
    , updateProfilePicture
}) => {


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
                    <div className="add-dp" >
                        <input type="file" onChange={(e) => uploadImage(e.target.files)} id="OpenImgUpload" />
                        <label htmlFor="OpenImgUpload"><i className="fas fa-camera"></i></label>
                    </div>
                </div>
                <div className="user_pro_status">
                    <ul className="flw-status">
                        <li>
                            <span>Following</span>
                            <b>{numberOfFollowing}</b>
                        </li>
                        <li>
                            <span>Followers</span>
                            <b>{numberOfFollowers}</b>
                        </li>
                    </ul>
                </div>
                <ul className="social_links">
                    <li>
                        <a href="#" title=""
                        ><i className="la la-globe"></i>{website}</a>
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i className="fa fa-facebook-square"></i>{facebook}</a>
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i className="fa fa-twitter"></i>{twitter}</a>
                    </li>

                    <li>
                        <a href="#" title=""
                        ><i className="fa fa-instagram"></i>{instagram}</a>
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i className="fa fa-youtube"></i>{youtube}</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}


Main_left_sidebar.propTypes = {
    updateProfilePicture: PropTypes.func.isRequired,
};

export default connect(null, { updateProfilePicture })(Main_left_sidebar)

