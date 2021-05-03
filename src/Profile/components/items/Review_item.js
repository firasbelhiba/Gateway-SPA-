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
        <div class="post-bar">
            <div class="post_topbar">
                <div class="usy-dt">
                    <img src={review.avatar} style={{ width: '40px', height: '40px' }} alt="" />
                    <div class="usy-name">
                        <h3>{review.name}</h3>
                        <span
                        ><img src="images/clock.png" alt="" /><TimeAgo datetime={review.date} locale="vi" /></span>
                    </div>
                </div>

            </div>

            <div class="job_descp mt-4">
                <div className="star-descp review">
                    <ul>
                        {content}
                    </ul>
                    <a href="#" title="">{review.rate}.0 of 5 Reviews</a>
                </div>
                <p>
                    {review.text}
                </p>

            </div>

        </div>
    )
}

export default Review_item
