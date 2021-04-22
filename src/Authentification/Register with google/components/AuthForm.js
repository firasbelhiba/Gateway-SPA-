import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AuthForm = () => {
    return (
        <div className="col-lg-6">
            <div className="login-sec">
                <ul className="sign-control">
                </ul>
                <ToastContainer />

                <div className="sign_in_sec current" id="tab-1">
                    <h3>Type your password</h3>
                    <form >
                        <div className="row">
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                    />
                                    <i className="la la-user"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Repeat yout password"
                                        required
                                    />
                                    <i className="la la-user"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 no-pdd">
                                <button type="submit" value="submit">Register</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AuthForm
