import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerWithLinkedin } from '../../../actions/auth';



const AuthForm = ({ registerWithLinkedin }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        link: '',
        cookie: ''
    });

    const { email, password, link, cookie } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        registerWithLinkedin({ email, password, link, cookie })
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
                                                type="email"
                                                name="email"
                                                value={email}
                                                placeholder="Email"
                                                onChange={e => onChange(e)}
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
                                                placeholder="Password"
                                                onChange={e => onChange(e)}
                                                required
                                            />
                                            <i className="fas fa-at"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 no-pdd">
                                        <div className="sn-field">
                                            <input
                                                type="text"
                                                name="link"
                                                value={link}
                                                placeholder="Link"
                                                onChange={e => onChange(e)}
                                                required
                                            />
                                            <i className="la la-lock"></i>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 no-pdd">
                                        <div className="sn-field">
                                            <input
                                                type="text"
                                                name="cookie"
                                                value={cookie}
                                                placeholder="Cookie"
                                                onChange={e => onChange(e)}
                                                required
                                            />
                                            <i className="la la-lock"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 no-pdd">
                                <button type="submit" value="submit">Register</button>
                            </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}



AuthForm.propTypes = {
    registerWithLinkedin: PropTypes.func.isRequired,
}

export default connect(null, { registerWithLinkedin })(AuthForm)
