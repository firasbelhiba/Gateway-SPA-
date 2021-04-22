import React, { Fragment } from 'react'
import TimeAgo from "timeago-react";


const Notification = () => {
    let this_profile = JSON.parse(localStorage.getItem("profile"));

    return (
        <Fragment>
            <div
                className="tab-pane fade show active"
                id="nav-notification"
                role="tabpanel"
                aria-labelledby="nav-notification-tab"
            >
                <div className="acc-setting">
                    <h3>Notifications</h3>
                    {this_profile.notification.map(p => (
                        <div className="notifications-list">

                            <div className="notfication-details">
                                <div className="noty-user-img">
                                    <img src="images/resources/ny-img1.png" alt="" />
                                </div>
                                <div className="notification-info">
                                    <h3>
                                        {p.message}
                                    </h3>
                                    <span><TimeAgo datetime={p.date} locale="vi" /></span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </Fragment>
    )
}

export default Notification
