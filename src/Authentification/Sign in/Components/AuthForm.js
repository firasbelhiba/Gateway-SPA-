import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FacebookLogin from 'react-facebook-login';
import Recaptcha from 'react-recaptcha';



import './AuthForm.css';
import { Link, Redirect } from 'react-router-dom';

const AuthForm = ({ login, isAuthenticated }) => {

    const [facebookForm, setFacebookForm] = useState({
        userID: '',
        name: '',
        email: '',
        picture: ''
    })

    const [isVerified, setIsVerified] = useState(true);


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    //console.log(isVerified)


    const { email, password } = formData;

    const recaptchaLoaded = () => {
        console.log('recaptcha loaded succefully ! ')
    }

    const verifyCallback = (response) => {
        if (response) setIsVerified(true);
    }

    console.log(isVerified)

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        if (!isVerified) {
            toast.error("Are you a robot ? Verify first ! ", {
                position: toast.POSITION.BOTTOM_LEFT
            });
        }

        if (isVerified) {
            e.preventDefault();
            login(email, password);
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
                            <Recaptcha
                                sitekey="6Lc4-7gaAAAAAHy5aTmR529Jtx8FjbIyGXgsZhX-"
                                render="explicit"
                                onloadCallback={() => recaptchaLoaded()}
                                verifyCallback={(response) => verifyCallback(response)}

                            />
                            {isVerified && <div className="col-lg-12 no-pdd mb-2">
                                <button type="submit" value="submit">Sign in</button>
                            </div>}
                        </div>
                    </form>

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