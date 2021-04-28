import React, { useState } from 'react'
import ReactRating from 'react-rate-thing'
import TimeAgo from 'timeago-react';



const Review_item = ({ avatar, review }) => {
    const [rate, selectRate] = useState(3.6);

    let content = [];

    for (let i = 0; i < review.rate; i++) {
        content.push(<li><i className="fa fa-star"></i></li>);
    }

    return (
        <div className="post-bar">
            <div className="post_topbar">
                <div className="usy-dt">
                    <img src={review.avatar} style={{ width: '40px', height: '40px' }} alt="" />
                    <div className="usy-name">
                        <h3>{review.name}</h3>
                        <p><i className="la la-clock-o"></i>
                            <TimeAgo datetime={review.date} locale="vi" />
                        </p>
                        <div className="epi-sec epi2">
                            <ul className="descp review-lt">
                                <li>
                                    <img src="assets/images/icon8.png" alt="" /><span
                                    >Epic Coder</span>
                                </li>
                                <li>
                                    <img src="assets/images/icon9.png" alt="" /><span
                                    >India</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="job_descp mngdetl">
                <div className="star-descp review">
                    <ul>
                        {content}
                    </ul>
                    <a href="#" title="">{review.rate}.0 of 5 Reviews</a>
                </div>
                <div className="reviewtext">
                    <p>
                        {review.text}
                    </p>
                    <hr />
                </div>
                {review.messages.map(message => (
                    <div className="post_topbar post-reply">
                        <div className="usy-dt">
                            <img src="assets/images/resources/bg-img4.png" alt="" />
                            <div className="usy-name">
                                <h3>{message.name}</h3>
                                <div className="epi-sec epi2">
                                    <p><i className="la la-clock-o"></i>
                                        <TimeAgo datetime={message.date} locale="vi" />
                                    </p>
                                    <p className="tahnks">{message.message} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="post_topbar rep-post rep-thanks">
                    <hr />
                    <div className="usy-dt">
                        <img src={avatar} style={{ width: '40px', height: '40px' }} alt="" />
                        <input
                            className="reply"
                            type="text"
                            placeholder="Reply"
                        />
                        <a className="replybtn" href="#">Send</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review_item
