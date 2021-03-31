import React from 'react'

export const Main_left_sidebar = (props) => {
    return (
        <div className="main-left-sidebar">
            <div className="user_profile">
                <div className="user-pro-img">
                    <img src={props.avatar} alt="" />
                    <div className="add-dp" id="OpenImgUpload">
                        <input type="file" id="file" />
                        <label for="file"><i className="fas fa-camera"></i></label>
                    </div>
                </div>
                <div className="user_pro_status">
                    <ul className="flw-status">
                        <li>
                            <span>Following</span>
                            <b>{props.numberOfFollowing}</b>
                        </li>
                        <li>
                            <span>Followers</span>
                            <b>{props.numberOfFollowers}</b>
                        </li>
                    </ul>
                </div>
                <ul className="social_links">
                    <li>
                        <a href="#" title=""
                        ><i className="la la-globe"></i>{props.website}</a>
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i className="fa fa-facebook-square"></i>{props.facebook}</a>
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i className="fa fa-twitter"></i>{props.twitter}</a>
                    </li>

                    <li>
                        <a href="#" title=""
                        ><i className="fa fa-instagram"></i>{props.instagram}</a>
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i className="fa fa-youtube"></i>{props.youtube}</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}
