import React from 'react'
import { Link } from 'react-router-dom'

const Edit_Profile = () => {
    return (
        <div className="message-btn mr-1">
            <Link to="edit-profile" title=""
            ><i className="fas fa-cog"></i> Edit profile</Link>
        </div>
    )
}

export default Edit_Profile
