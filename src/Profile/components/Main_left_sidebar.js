import React from 'react'

export const Main_left_sidebar = () => {
    return (
        <div class="main-left-sidebar">
            <div class="user_profile">
                <div class="user-pro-img">
                    <img src="assets/images/resources/user-pro-img.png" alt="" />
                    <div class="add-dp" id="OpenImgUpload">
                        <input type="file" id="file" />
                        <label for="file"><i class="fas fa-camera"></i></label>
                    </div>
                </div>
                <div class="user_pro_status">
                    <ul class="flw-status">
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
                <ul class="social_links">
                    <li>
                        <a href="#" title=""
                        ><i class="la la-globe"></i> www.example.com</a
                        >
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i class="fa fa-facebook-square"></i>
Http://www.facebook.com/john...</a
                        >
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i class="fa fa-twitter"></i>
Http://www.Twitter.com/john...</a
                        >
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i class="fa fa-google-plus-square"></i>
Http://www.googleplus.com/john...</a
                        >
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i class="fa fa-behance-square"></i>
Http://www.behance.com/john...</a
                        >
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i class="fa fa-pinterest"></i>
Http://www.pinterest.com/john...</a
                        >
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i class="fa fa-instagram"></i>
Http://www.instagram.com/john...</a
                        >
                    </li>
                    <li>
                        <a href="#" title=""
                        ><i class="fa fa-youtube"></i>
Http://www.youtube.com/john...</a
                        >
                    </li>
                </ul>
            </div>
            
        </div>
    )
}
