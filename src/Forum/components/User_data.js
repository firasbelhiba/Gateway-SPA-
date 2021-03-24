import React from 'react'

const User_data = () => {
    return (
        <div class="user-data full-width">
            <div class="user-profile">
                <div class="username-dt">
                    <div class="usr-pic">
                        <img src="assets/images/resources/user-pic.png" alt="" />
                    </div>
                </div>
                <div class="user-specs">
                    <h3>John Doe</h3>
                    <span>Graphic Designer at Self Employed</span>
                </div>
            </div>
            <ul class="user-fw-status">
                <li>
                    <h4>Following</h4>
                    <span>34</span>
                </li>
                <li>
                    <h4>Followers</h4>
                    <span>155</span>
                </li>
                <li>
                    <a
                        href="https://www.gambolthemes.net/workwise-new/my-profile.html"
                        title=""
                    >View Profile</a
                    >
                </li>
            </ul>
        </div>
    )
}

export default User_data
