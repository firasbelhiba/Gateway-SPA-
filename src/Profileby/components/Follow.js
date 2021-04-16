import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { follow, getProfileById } from '../../actions/profile';

const Follow = ({ followers, follow, id, id_user, id_current_profile }) => {
    let profile = JSON.parse(localStorage.getItem("profile"));

    let found = false;
    for (var i = 0; i < followers.length; i++) {
        if (followers[i].profile === profile._id) {
            found = true;
            break;
        }
    }
    console.log(found);

    const [showFollow, setShowFollow] = useState(found)

    return (
        <div className="message-btn mr-1">
            {showFollow === false ?
                <Fragment>
                    <a title=""
                        style={{
                            backgroundColor: "#007bff",
                            color: "white",
                            cursor: "pointer"
                        }}
                        onClick={() => {
                            follow(id, id_user);
                            setShowFollow(!showFollow);
                        }}
                    ><i className="fas fa-user-plus"></i>Follow</a>
                </Fragment> :
                <Fragment>
                    <a title=""
                        style={{
                            backgroundColor: "red",
                            color: "white",
                            cursor: "pointer"
                        }}
                        onClick={() => {
                            setShowFollow(!showFollow);
                        }}

                    ><i className="fas fa-user-minus"></i>Unfollow</a>
                </Fragment>
            }
        </div>
    )
}

Follow.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    follow: PropTypes.func.isRequired,
}




export default connect(null, { follow })(Follow)
