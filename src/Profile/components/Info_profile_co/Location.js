import React from 'react'

export const Location = (props) => {
    return (
        <div className="user-profile-ov">
            <h3>
                <a href="#" title="" className="lct-box-open">Location</a>
            </h3>
            <h4>{props.location}</h4>
            <p></p>
        </div>
    )
}
