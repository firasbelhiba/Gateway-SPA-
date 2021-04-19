import React from 'react'
import { Link } from 'react-router-dom'

const User_message_details = ({ profile }) => {
    return (
        <Link to={`/messages?id=${profile.user}`}>
            <ul>
                <li className="active">
                    <div className="usr-msg-details">
                        <div className="usr-ms-img">
                            <img src="images/resources/m-img1.png" alt="" />
                            <span className="msg-status"></span>
                        </div>
                        <div className="usr-mg-info">
                            <h3>{profile.name}</h3>
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
        </Link>
    )
}

export default User_message_details
