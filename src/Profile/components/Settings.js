import React from 'react'
import { Link } from 'react-router-dom'

export const Settings = () => {
    return (
        <div className="message-btn">
            <Link to="/settings" title=""
            ><i className="fas fa-cog"></i> Setting</Link>
        </div>
    )
}
