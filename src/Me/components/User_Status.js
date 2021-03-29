import React from 'react'
import { Link } from 'react-router-dom'

const User_Status = (props) => {
    return (
        <div className="user-data full-width">
            <div className="user-profile">
                <div className="usr-pic">
                    <img src={props.avatar} alt="" />
                </div>

                <div className="user-specs">
                    <h1>Welcome</h1>
                    <i className="fa fa-user mt-2" />
                    <h3>{props.name}</h3>
                    <span>{props.status}</span>
                </div>
            </div>
            <div className="user-profy">
                <Link to="/myprofile" title="">View Profile</Link>
            </div>
        </div>
    )
}

export default User_Status
