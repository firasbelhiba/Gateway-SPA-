import React, { Fragment, useState } from 'react';

import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import { register } from '../../../actions/auth';
import { Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import PropTypes from 'prop-types'


import './AuthForm.css';

const AuthForm = ({ setAlert, register, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('password does not match', 'danger');


        } else {
            register({ name, email, password });
        }
    }

    // If you are logged in you get redirected to /forum
    if (isAuthenticated) {
        return <Redirect to='/me' />;
    }

    return (
        <Fragment>

            <div className="col-lg-6">
                <div className="login-sec">
                    <ul className="sign-control">
                    </ul>
                    <ToastContainer />
                    <div className="sign_in_sec current" id="tab-2">

                        <div className="dff-tab current" id="tab-3">
                            <form onSubmit={e => onSubmit(e)}>
                                <div className="row">
                                    <div className="col-lg-12 no-pdd">
                                        <div className="sn-field">
                                            <input
                                                type="text"
                                                name="name"
                                                value={name}
                                                placeholder="Full Name"
                                                onChange={e => onChange(e)}
                                                required
                                            />
                                            <i className="la la-user"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 no-pdd">
                                        <div className="sn-field">
                                            <input
                                                type="email"
                                                name="email"
                                                value={email}
                                                placeholder="Email"
                                                onChange={e => onChange(e)}
                                                required
                                            />
                                            <i className="fas fa-at"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 no-pdd">
                                        <div className="sn-field">
                                            <input
                                                type="password"
                                                name="password"
                                                value={password}
                                                placeholder="Password"
                                                minLength="6"
                                                onChange={e => onChange(e)}
                                                required
                                            />
                                            <i className="la la-lock"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 no-pdd">
                                        <div className="sn-field">
                                            <input
                                                type="password"
                                                name="password2"
                                                value={password2}
                                                placeholder="Repeat Password"
                                                onChange={e => onChange(e)}
                                                minLength="6"
                                                required
                                            />
                                            <i className="la la-lock"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 no-pdd">
                                        <div className="checky-sec st2">
                                            <div className="fgt-sec">
                                                <input type="checkbox" name="cc" id="c2" />
                                                <label htmlFor="c2">
                                                    <span></span>
                                                </label>
                                                <small
                                                >Yes, I understand and agree to the workwise Terms & Conditions.</small
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 no-pdd">
                                        <button type="submit" value="submit">
                                            Get Started
                                    </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="dff-tab" id="tab-4">
                            <form>
                                <div className="row">
                                    <div className="col-lg-12 no-pdd">
                                        <div className="sn-field">
                                            <input
                                                type="text"
                                                name="company-name"
                                                placeholder="Company Name"
                                            />
                                            <i className="la la-building"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 no-pdd">
                                        <div className="sn-field">
                                            <input
                                                type="text"
                                                name="country"
                                                placeholder="Country"
                                            />
                                            <i className="la la-globe"></i>
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
                                        <div className="sn-field">
                                            <input
                                                type="password"
                                                name="repeat-password"
                                                placeholder="Repeat Password"
                                            />
                                            <i className="la la-lock"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 no-pdd">
                                        <div className="checky-sec st2">
                                            <div className="fgt-sec">
                                                <input type="checkbox" name="cc" id="c3" />
                                                <label htmlFor="c3">
                                                    <span></span>
                                                </label>
                                                <small
                                                >Yes, I understand and agree to the workwise Terms & Conditions.</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 no-pdd">
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
        </Fragment>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

AuthForm.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,

}

export default connect(mapStateToProps, { setAlert, register })(AuthForm);