import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { follow, getProfileById } from '../../actions/profile';

const Follow = ({ getProfileById, follow, id, id_user }) => {
    return (
        <div className="message-btn mr-1">
            <a title=""
                style={{
                    backgroundColor: "#007bff",
                    color: "white",
                    cursor: "pointer"
                }}
                onClick={() => {
                    follow(id, id_user);
                }}
            ><i className="fas fa-user-plus"></i>Follow</a>
        </div>
    )
}

Follow.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    follow: PropTypes.func.isRequired,
}

export default connect(null, { follow, getProfileById })(Follow)
