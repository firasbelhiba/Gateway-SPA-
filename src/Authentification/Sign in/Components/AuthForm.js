import React from 'react';

import './AuthForm.css';

const AuthForm = props => {
    return (
        <div className="col-lg-6">
            <div className="login-sec">
                <ul className="sign-control">

                </ul>

                <div className="sign_in_sec current" id="tab-1">
                    <h3>Sign in</h3>
                    <form>
                        <div className="row">
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                    />
                                    <i className="la la-user"></i>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                    <i className="la la-lock"></i>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="checky-sec">
                                    <div className="fgt-sec">
                                        <input type="checkbox" name="cc" id="c1" />
                                        <label for="c1">
                                            <span></span>
                                        </label>
                                        <small>Remember me</small>
                                    </div>
                                    <a href="#" title="">Forgot Password?</a>
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
                                <a href="#" title="" className="fb"
                                ><i className="fa fa-facebook"></i>Login Via Facebook</a
                                >
                            </li>
                            <li>
                                <a href="#" title="" className="tw"
                                ><i className="fa fa-twitter"></i>Login Via Twitter</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthForm;