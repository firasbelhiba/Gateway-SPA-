import React from 'react'

export const Main_left_sidebar = () => {
    return (
        <div className="main-left-sidebar">
            <div className="user_profile">
                <div className="user-pro-img">
                    <img src="assets/images/resources/user-pro-img.png" alt="" />
                    <div className="add-dp" id="OpenImgUpload">
                        <input type="file" id="file" />
                        <label for="file"><i className="fas fa-camera"></i></label>
                    </div>
                </div>
                <div className="user_pro_status">
                    <ul className="flw-status">
                        <li>
                            <span>Following</span>
                            <b>34</b>
                        </li>
                        <li>
                            <span>Followers</span>
                            <b>155</b>
                        </li>
                    </ul>
                </div>
                <ul className="social_links">
                    <li>
                        <a href="#" title=""
                        ><i className="la la-globe"></i> www.example.com</a
                        >
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i className="fa fa-facebook-square"></i>
Http://www.facebook.com/john...</a
                        >
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i className="fa fa-twitter"></i>
Http://www.Twitter.com/john...</a
                        >
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i className="fa fa-google-plus-square"></i>
Http://www.googleplus.com/john...</a
                        >
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i className="fa fa-behance-square"></i>
Http://www.behance.com/john...</a
                        >
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i className="fa fa-pinterest"></i>
Http://www.pinterest.com/john...</a
                        >
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i className="fa fa-instagram"></i>
Http://www.instagram.com/john...</a
                        >
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i className="fa fa-youtube"></i>
Http://www.youtube.com/john...</a
                        >
                    </li>
                </ul>
            </div>

        </div>
    )
}
