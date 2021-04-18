import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { follow, unfollow } from '../../actions/profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Follow = ({ followers, follow, id, id_user, unfollow }) => {

    let profile = JSON.parse(localStorage.getItem("profile"));

    let found = false;

    for (var i = 0; i < followers.length; i++) {
        if (followers[i].profile === profile._id) {
            found = true;
            break;
        }
    }

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
                            toast.success("You have just followed this profile!", {
                                position: toast.POSITION.BOTTOM_LEFT
                            });
                        }}
                    ><i className="fas fa-user-plus" ></i>Follow</a>
                    <ToastContainer />
                </Fragment> :
                <Fragment>
                    <a title=""
                        style={{
                            backgroundColor: "red",
                            color: "white",
                            cursor: "pointer"
                        }}
                        onClick={() => {
                            unfollow(id, id_user);
                            setShowFollow(!showFollow);
                            toast.success("You have just unfollowed this profile!", {
                                position: toast.POSITION.BOTTOM_LEFT,
                            });
                        }}


                    ><i className="fas fa-user-minus"></i>Unfollow</a>
                    <ToastContainer />
                </Fragment>
            }
        </div>
    )
}

Follow.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    follow: PropTypes.func.isRequired,
    unfollow: PropTypes.func.isRequired,
}




export default connect(null, { follow, unfollow })(Follow)
