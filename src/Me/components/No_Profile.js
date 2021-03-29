import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const No_Profile = (props) => {
    return (
        <Fragment>

            <span>You don't have yet a profile ? please add some info </span>

            <div className="user-profy">
                <Link to="/create-profile" title="">Create Profile</Link>
            </div>
        </Fragment>
    )
}

export default No_Profile
