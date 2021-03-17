import React from 'react'

export const Profile_navigation_bar = () => {
    return (
        <ul>
            <li data-tab="feed-dd" className="active">
                <a href="#" title="">
                    <img src="assets/images/ic1.png" alt="" />
                    <span>Feed</span>
                </a>
            </li>
            <li data-tab="info-dd">
                <a href="#" title="">
                    <img src="assets/images/ic2.png" alt="" />
                    <span>Info</span>
                </a>
            </li>
            <li data-tab="saved-jobs">
                <a href="#" title="">
                    <img src="assets/images/ic4.png" alt="" />
                    <span>Jobs</span>
                </a>
            </li>
            <li data-tab="my-bids">
                <a href="#" title="">
                    <img src="assets/images/ic5.png" alt="" />
                    <span>Bids</span>
                </a>
            </li>
            <li data-tab="portfolio-dd">
                <a href="#" title="">
                    <img src="assets/images/ic3.png" alt="" />
                    <span>Portfolio</span>
                </a>
            </li>
            <li data-tab="rewivewdata">
                <a href="#" title="">
                    <img src="assets/images/review.png" alt="" />
                    <span>Reviews</span>
                </a>
            </li>
            <li data-tab="payment-dd">
                <a href="#" title="">
                    <img src="assets/images/ic6.png" alt="" />
                    <span>Payment</span>
                </a>
            </li>
        </ul>
    )
}
