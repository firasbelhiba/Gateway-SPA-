import React from 'react'
import { reportProfileById } from '../../actions/profile';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Report_profile = ({ id, reportProfileById }) => {
    return (
        <div className="message-btn mr-1">
            <a onClick={() => {
                reportProfileById("608f248aa6982747005ebc0a")
                toast.success("You have reported this profile!", {
                    position: toast.POSITION.BOTTOM_LEFT
                });
            }} title=""
                style={{ backgroundColor: "yellow", cursor: 'pointer' }}
            ><i className="fas fa-user-slash"></i>Report</a>
        </div>
    )
}


Report_profile.propTypes = {
    reportProfileById: PropTypes.func.isRequired,
}

export default connect(null, { reportProfileById })(Report_profile)
