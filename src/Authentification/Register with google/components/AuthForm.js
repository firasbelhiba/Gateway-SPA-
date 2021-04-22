import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerWithGoogle } from '../../../actions/auth';
import { setAlert } from '../../../actions/alert';
import { Redirect } from 'react-router';

const AuthForm = ({ registerWithGoogle, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        password: '',
        password2: ''
    });

    const { password, password2 } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('password does not match', 'danger');


        } else {
            registerWithGoogle({ password });
        }
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
                <ToastContainer />

                <div className="sign_in_sec current" id="tab-1">
                    <h3>Type your password</h3>
                    <form onSubmit={e => onSubmit(e)} >
                        <div className="row">
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        minLength="6"
                                        onChange={e => onChange(e)}
                                        value={password}
                                        required
                                    />
                                    <i className="la la-user"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input
                                        type="password"
                                        name="password2"
                                        placeholder="Repeat yout password"
                                        minLength="6"
                                        onChange={e => onChange(e)}
                                        value={password2}
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

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

AuthForm.propTypes = {
    setAlert: PropTypes.func.isRequired,
    registerWithGoogle: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,

}

export default connect(mapStateToProps, { setAlert, registerWithGoogle })(AuthForm)
