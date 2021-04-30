import React, { Fragment, useState } from 'react';

import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import { register } from '../../../actions/auth';
import { Link, Redirect } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
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
            toast.error("Password doesn't match", {
                position: toast.POSITION.BOTTOM_LEFT,
            });
        } else if (email === "") {
            toast.error("Email required", {
                position: toast.POSITION.BOTTOM_LEFT,
            });

        } else if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error("Email address is invalid", {
                position: toast.POSITION.BOTTOM_LEFT,
            });

        } else if (name === "") {
            toast.error("name is required", {
                position: toast.POSITION.BOTTOM_LEFT,
            });

        }
        else if (password === "") {
            toast.error("Password is required", {
                position: toast.POSITION.BOTTOM_LEFT,
            });
        } else if (password.length < 6) {
            toast.error("Password needs to be 6 characters or more", {
                position: toast.POSITION.BOTTOM_LEFT,
            });
        }
        else {
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
                                                onChange={e => onChange(e)}

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
                                    <div className="login-resources">
                                        <h4>Login Via Social Account</h4>
                                        <ul>
                                            <li>
                                                <Link to="/login-with-facebook" title="" className="fb"
                                                ><i className="fa fa-facebook"></i>Login Via Facebook</Link>
                                            </li>
                                            <li>
                                                <a href="!#" title="" className="tw"
                                                ><i className="fa fa-linkedin"></i>Login Via LinkedIn</a
                                                >
                                            </li>
                                            <li>
                                                <a style={{ backgroundColor: '#DE5246' }} href="http://localhost:5000/api/users/google" title="" className="tw"
                                                ><i className="fab fa-google"></i>Login Via LinkedIn</a
                                                >
                                            </li>
                                            <li>
                                                <Link to='/login-with-github' style={{ backgroundColor: '#24292e' }} href="!#" title="" className="tw"
                                                ><i className="fab fa-github"></i>Login Via Github</Link>
                                            </li>
                                        </ul>
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