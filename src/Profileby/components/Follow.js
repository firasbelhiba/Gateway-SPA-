import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { follow, getProfileById } from '../../actions/profile';

const Follow = ({ this_profile, follow, id, id_user }) => {
    let followingList = JSON.parse(localStorage.getItem("following"));

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
    this_profile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    this_profile: state.this_profile,
});


export default connect(mapStateToProps, { follow })(Follow)
