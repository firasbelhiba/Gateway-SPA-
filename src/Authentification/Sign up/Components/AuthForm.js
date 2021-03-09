import React from 'react';

import './AuthForm.css';

const AuthForm = props => {
    return (
        <div class="col-lg-6">
            <div class="login-sec">
                <ul class="sign-control">

                </ul>

                <div class="sign_in_sec current" id="tab-2">
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
                                            >Yes, I understand and agree to the workwise Terms & Conditions.</small
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
                                            >Yes, I understand and agree to the workwise Terms & Conditions.</small
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
    );
};

export default AuthForm;