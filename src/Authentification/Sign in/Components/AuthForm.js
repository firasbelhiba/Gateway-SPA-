import React from 'react';

import './AuthForm.css';

const AuthForm = props => {
    return (
        <div class="col-lg-6">
            <div class="login-sec">
                <ul class="sign-control">

                </ul>

                <div class="sign_in_sec current" id="tab-1">
                    <h3>Sign in</h3>
                    <form>
                        <div class="row">
                            <div class="col-lg-12 no-pdd">
                                <div class="sn-field">
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                    />
                                    <i class="la la-user"></i>
                                </div>
                            </div>
                            <div class="col-lg-12 no-pdd">
                                <div class="sn-field">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                    <i class="la la-lock"></i>
                                </div>
                            </div>
                            <div class="col-lg-12 no-pdd">
                                <div class="checky-sec">
                                    <div class="fgt-sec">
                                        <input type="checkbox" name="cc" id="c1" />
                                        <label for="c1">
                                            <span></span>
                                        </label>
                                        <small>Remember me</small>
                                    </div>
                                    <a href="#" title="">Forgot Password?</a>
                                </div>
                            </div>
                            <div class="col-lg-12 no-pdd">
                                <button type="submit" value="submit">Sign in</button>
                            </div>
                        </div>
                    </form>
                    <div class="login-resources">
                        <h4>Login Via Social Account</h4>
                        <ul>
                            <li>
                                <a href="#" title="" class="fb"
                                ><i class="fa fa-facebook"></i>Login Via Facebook</a
                                >
                            </li>
                            <li>
                                <a href="#" title="" class="tw"
                                ><i class="fa fa-twitter"></i>Login Via Twitter</a
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