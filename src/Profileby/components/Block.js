import React from 'react'
import { Link } from 'react-router-dom'

const Block = () => {
    <div className="message-btn mr-1">
        <Link to="edit-profile" title=""
            style={{ color: "red" }}
        ><i className="fas fa-user-slash"></i>Block</Link>
    </div>
}

export default Block
