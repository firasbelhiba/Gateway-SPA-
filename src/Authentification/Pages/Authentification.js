import React from "react";

import "./Authentification.css";

const Authentification = () => {
    return (
        <body class="sign-in">
            <div class="wrapper">
                <div class="sign-in-page">
                    <div class="signin-popup">
                        <div class="signin-pop">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="cmp-info">
                                        <div class="cm-logo">
                                            <img src="assets/images/cm-logo.png" alt="" />
                                            <p>
                                                Workwise, is a global freelancing platform and social
                                                networking where businesses and independent professionals
                                                connect and collaborate remotely
                  </p>
                                        </div>
                                        <img src="assets/images/cm-main-img.png" alt="" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="login-sec">
                                        <ul class="sign-control">
                                            <li data-tab="tab-1" class="current">
                                                <a href="#" title="">Sign in</a>
                                            </li>
                                            <li data-tab="tab-2"><a href="#" title="">Sign up</a></li>
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
                                        <div class="sign_in_sec" id="tab-2">
                                            <div class="signup-tab">
                                                <i class="fa fa-long-arrow-left"></i>
                                                <h2>
                                                    <a
                                                        href="https://gambolthemes.net/cdn-cgi/l/email-protection"
                                                        class="__cf_email__"
                                                        data-cfemail="4b212423252f242e0b2e332a263b272e65282426"
                                                    >[email&#160;protected]</a
                                                    >
                                                </h2>
                                                <ul>
                                                    <li data-tab="tab-3" class="current">
                                                        <a href="#" title="">User</a>
                                                    </li>
                                                    <li data-tab="tab-4">
                                                        <a href="#" title="">Company</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="dff-tab current" id="tab-3">
                                                <form>
                                                    <div class="row">
                                                        <div class="col-lg-12 no-pdd">
                                                            <div class="sn-field">
                                                                <input
                                                                    type="text"
                                                                    name="name"
                                                                    placeholder="Full Name"
                                                                />
                                                                <i class="la la-user"></i>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12 no-pdd">
                                                            <div class="sn-field">
                                                                <input
                                                                    type="text"
                                                                    name="country"
                                                                    placeholder="Country"
                                                                />
                                                                <i class="la la-globe"></i>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12 no-pdd">
                                                            <div class="sn-field">
                                                                <select>
                                                                    <option>Category</option>
                                                                    <option>Category 1</option>
                                                                    <option>Category 2</option>
                                                                    <option>Category 3</option>
                                                                    <option>Category 4</option>
                                                                </select>
                                                                <i class="la la-dropbox"></i>
                                                                <span><i class="fa fa-ellipsis-h"></i></span>
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
                                                            <div class="sn-field">
                                                                <input
                                                                    type="password"
                                                                    name="repeat-password"
                                                                    placeholder="Repeat Password"
                                                                />
                                                                <i class="la la-lock"></i>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12 no-pdd">
                                                            <div class="checky-sec st2">
                                                                <div class="fgt-sec">
                                                                    <input type="checkbox" name="cc" id="c2" />
                                                                    <label for="c2">
                                                                        <span></span>
                                                                    </label>
                                                                    <small
                                                                    >Yes, I understand and agree to the workwise
                                Terms & Conditions.</small
                                                                    >
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12 no-pdd">
                                                            <button type="submit" value="submit">
                                                                Get Started
                          </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="dff-tab" id="tab-4">
                                                <form>
                                                    <div class="row">
                                                        <div class="col-lg-12 no-pdd">
                                                            <div class="sn-field">
                                                                <input
                                                                    type="text"
                                                                    name="company-name"
                                                                    placeholder="Company Name"
                                                                />
                                                                <i class="la la-building"></i>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12 no-pdd">
                                                            <div class="sn-field">
                                                                <input
                                                                    type="text"
                                                                    name="country"
                                                                    placeholder="Country"
                                                                />
                                                                <i class="la la-globe"></i>
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
                                                            <div class="sn-field">
                                                                <input
                                                                    type="password"
                                                                    name="repeat-password"
                                                                    placeholder="Repeat Password"
                                                                />
                                                                <i class="la la-lock"></i>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12 no-pdd">
                                                            <div class="checky-sec st2">
                                                                <div class="fgt-sec">
                                                                    <input type="checkbox" name="cc" id="c3" />
                                                                    <label for="c3">
                                                                        <span></span>
                                                                    </label>
                                                                    <small
                                                                    >Yes, I understand and agree to the workwise
                                Terms & Conditions.</small
                                                                    >
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-12 no-pdd">
                                                            <button type="submit" value="submit">
                                                                Get Started
                          </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footy-sec">
                        <div class="container">
                            <ul>
                                <li><a href="help-center.html" title="">Help Center</a></li>
                                <li><a href="about.html" title="">About</a></li>
                                <li><a href="#" title="">Privacy Policy</a></li>
                                <li><a href="#" title="">Community Guidelines</a></li>
                                <li><a href="#" title="">Cookies Policy</a></li>
                                <li><a href="#" title="">Career</a></li>
                                <li><a href="forum.html" title="">Forum</a></li>
                                <li><a href="#" title="">Language</a></li>
                                <li><a href="#" title="">Copyright Policy</a></li>
                            </ul>
                            <p><img src="images/copy-icon.png" alt="" />Copyright 2019</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Authentification; 