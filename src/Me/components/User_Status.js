import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const User_Status = (props) => {
    return (
        <Fragment>

            <span>{props.status}</span>

            <div className="user-profy">
                <Link to="/myprofile" title="">View Profile</Link>
            </div>
        </Fragment>
    )
}

export default User_Status
