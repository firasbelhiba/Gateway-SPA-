import React from 'react'
import { Link } from 'react-router-dom'

const No_Profile = (props) => {
    return (
        <div>
            <div className="user-data full-width">
                <div className="user-profile">
                    <div className="usr-pic">
                        <img src={props.avatar} alt="" />
                    </div>

                    <div className="user-specs">
                        <h1>Welcome</h1>
                        <i className="fa fa-user mt-2" />
                        <h3>{props.name}</h3>
                        <span>You don't have yet a profile ? please add some info </span>
                    </div>
                </div>
                <div className="user-profy">
                    <Link to="/create-profile" title="">Create Profile</Link>
                </div>
            </div>
        </div>
    )
}

export default No_Profile
