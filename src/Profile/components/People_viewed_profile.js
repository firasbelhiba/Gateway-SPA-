import React from 'react'
import TimeAgo from "timeago-react";


export const People_viewed_profile = ({ views_profile }) => {

    let Top5 = [];

    if (views_profile.length === 1) Top5.push(views_profile[0]);

    if (views_profile.length === 2) {
        Top5.push(views_profile[0]);
        Top5.push(views_profile[1]);
    }
    if (views_profile.length === 3) {
        Top5.push(views_profile[0]);
        Top5.push(views_profile[1]);
        Top5.push(views_profile[2]);
    }
    if (views_profile.length === 4) {
        Top5.push(views_profile[0]);
        Top5.push(views_profile[1]);
        Top5.push(views_profile[2]);
        Top5.push(views_profile[3]);
    }
    if (views_profile.length === 5) {
        Top5.push(views_profile[0]);
        Top5.push(views_profile[1]);
        Top5.push(views_profile[2]);
        Top5.push(views_profile[3]);
        Top5.push(views_profile[4]);
    }



    if (views_profile.length > 5) {
        for (var i = 0; i < 5; i++) {
            Top5.push(views_profile[i])
        }
    }





    console.log(Top5)

    return (
        <div className="suggestions full-width">
            <div className="sd-title">
                <h3>Who Viewed your Profile</h3>
                <i className="la la-ellipsis-v"></i>
            </div>
            <div className="suggestions-list">
                {views_profile.length === 0 && (
                    <div className="sgt-text">
                        <h4 style={{ color: '#64a1c7' }}>No one did !</h4>
                    </div>)}
                {Top5.map(profile => (
                    <div className="suggestion-usd">
                        <img src={profile.avatar} style={{ width: '40px', height: '40px' }} alt="" />
                        <div className="sgt-text">
                            <h4>{profile.name}</h4>
                            <span>
                                <TimeAgo datetime={profile.date} locale="vi" />
                            </span>
                        </div>
                        <span><i className="la la-plus"></i></span>
                    </div>
                ))}

                <div className="view-more">
                    <a href="#" title="">View More</a>
                </div>
            </div>
        </div>
    )
}
