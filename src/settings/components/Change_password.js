import React, { Fragment, useState } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { changePassword } from '../../actions/profile'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setAlert } from '../../actions/alert';
import Alert from "../../Shared/layouts/Alert";


// Password 2 styling is not ready yet 

const Change_password = ({ changePassword }) => {

    const [formData, setFormData] = useState({
        oldPassword: '',
        password: '',

    });

    const [password2, setPassword2] = useState("")

    const { oldPassword, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        changePassword(oldPassword, password);

    }

    return (
        <Fragment>
            <div
                className="tab-pane fade"
                id="nav-password"
                role="tabpanel"
                aria-labelledby="nav-password-tab"
            >
                <div className="acc-setting">
                    <h3>Account Setting</h3>
                    <form onSubmit={e => onSubmit(e)}>
                        <Alert />
                        <div className="cp-field">
                            <h5>Old Password</h5>
                            <div className="cpp-fiel">
                                <input
                                    type="password"
                                    name="old-password"
                                    placeholder="Old Password"
                                    onChange={e => onChange(e)}

                                />
                                <i className="fa fa-lock"></i>
                            </div>
                        </div>
                        <div className="cp-field">
                            <h5>New Password</h5>
                            <div className="cpp-fiel">
                                <input
                                    type="password"
                                    name="new-password"
                                    placeholder="New Password"
                                    minLength="6"
                                    onChange={e => onChange(e)}
                                />
                                <i className="fa fa-lock"></i>
                            </div>
                        </div>
                        {/* <div className="cp-field">
                            <h5>Repeat Password</h5>
                            <div className="cpp-fiel">
                                <input
                                    type="password"
                                    name="repeat-password"
                                    placeholder="Repeat Password"
                                    minLength="6"
                                    onChange={e => setPassword2(e.target.value)}
                                />
                                <i className="fa fa-lock"></i>
                            </div>
                        </div> */}
                        <div className="cp-field">
                            <h5><a href="#" title="">Forgot Password?</a></h5>
                        </div>
                        <div className="save-stngs pd2">
                            <ul>
                                <li><button type="submit">Save Setting</button></li>

                            </ul>
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

Change_password.propTypes = {
    changePassword: PropTypes.func.isRequired,
}

export default connect(null, { changePassword })(Change_password)
