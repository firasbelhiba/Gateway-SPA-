import React, { Fragment, useState } from 'react'
import TimeAgo from "timeago-react";
import Pagination from "../../Shared/layouts/Pagination";


const Notification = () => {
    let this_profile = JSON.parse(localStorage.getItem("profile"));

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);


    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentNotifications = this_profile.notification.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

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

                    {currentNotifications.map(p => (
                        <Fragment>

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
                        </Fragment>

                    ))}
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={this_profile.notification.length}
                        paginate={paginate}
                    />

                </div>
            </div>
        </Fragment>
    )
}

export default Notification
