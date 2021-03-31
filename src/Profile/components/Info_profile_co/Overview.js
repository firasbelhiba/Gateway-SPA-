import React from 'react'

export const Overview = (props) => {
    return (
        <div className="user-profile-ov">
            <h3>
                <a title="" className="overview-open">Bio</a>
            </h3>
            <p>
                {props.bio}
            </p>
        </div>
    )
}
