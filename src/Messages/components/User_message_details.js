import React from 'react'

const User_message_details = () => {
    return (
        <ul>
            <li className="active">
                <div className="usr-msg-details">
                    <div className="usr-ms-img">
                        <img src="images/resources/m-img1.png" alt="" />
                        <span className="msg-status"></span>
                    </div>
                    <div className="usr-mg-info">
                        <h3>John Doe</h3>
                        <p>
                            Lorem ipsum dolor
                        <img src="images/smley.png" alt="" />
                        </p>
                    </div>
                    <span className="posted_time">1:55 PM</span>
                    <span className="msg-notifc">1</span>
                </div>
            </li>
        </ul>
    )
}

export default User_message_details
