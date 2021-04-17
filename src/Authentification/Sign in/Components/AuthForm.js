import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';

import './AuthForm.css';
import { Link, Redirect } from 'react-router-dom';

const AuthForm = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    }

    // If you are logged in you get redirected to /forum
    if (isAuthenticated) {
        return <Redirect to='/me' />;
    }


    return (
        <div className="col-lg-6">
            <div className="login-sec">
                <ul className="sign-control">

                </ul>

                <div className="sign_in_sec current" id="tab-1">
                    <h3>Sign in</h3>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="row">
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={e => onChange(e)}
                                        placeholder="Email"
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
                                        value={password}
                                        onChange={e => onChange(e)}
                                        placeholder="Password"
                                    />
                                    <i className="la la-lock"></i>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="checky-sec">
                                    <div className="fgt-sec">
                                        <input type="checkbox" name="cc" id="c1" />
                                        <label htmlFor="c1">
                                            <span></span>
                                        </label>
                                        <small>Remember me</small>
                                    </div>
                                    <Link to="/reset-password" title="">Forgot Password?</Link>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <button type="submit" value="submit">Sign in</button>
                            </div>
                        </div>
                    </form>
                    <div className="login-resources">
                        <h4>Login Via Social Account</h4>
                        <ul>
                            <li>
                                <a href="!#" title="" className="fb"
                                ><i className="fa fa-facebook"></i>Login Via Facebook</a
                                >
                            </li>
                            <li>
                                <a href="!#" title="" className="tw"
                                ><i className="fa fa-linkedin"></i>Login Via LinkedIn</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

AuthForm.propTypes = {
    isAuthenticated: PropTypes.bool,
    login: PropTypes.func.isRequired
}


export default connect(mapStateToProps, { login })(AuthForm)