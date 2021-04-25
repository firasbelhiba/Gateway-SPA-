import React, { Fragment, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../../actions/alert';
import { Redirect } from 'react-router';
import FacebookLogin from 'react-facebook-login';
import { login, registerWithFacebook } from '../../../actions/auth';



const AuthForm = ({ isAuthenticated, registerWithFacebook }) => {

    const [formData, setFormData] = useState({
        password: '',
        password2: ''
    });

    const { password, password2 } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const [step, setStep] = useState('step1');

    const responseFacebook = (response) => {

        const data = {
            name: response.name,
            email: response.email,
            password: password,
            avatar: response.picture.data.url
        }

        registerWithFacebook(data)

    }


    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            toast.error("Are you a robot ? Verify first ! ", {
                position: toast.POSITION.BOTTOM_LEFT
            });

        } else {
            setStep("step2")
        }
    }

    const componentClicked = () => {

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
                    <form onSubmit={e => onSubmit(e)} >
                        <div className="row">
                            {step === "step1" &&
                                <Fragment>
                                    <h3> Step 1 :Type your password</h3>
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

                                    <div className="col-lg-12 no-pdd mb-2">
                                        <button type="submit" value="submit">Save</button>
                                    </div>
                                </Fragment>
                            }


                            {step === "step2" && <div className="col-lg-12 no-pdd">
                                <h3> Step 2 :Register with facebook </h3>

                                <FacebookLogin
                                    appId="1379965202384556"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    onClick={componentClicked}
                                    callback={responseFacebook}
                                    cssClass="facebook-btn fb"
                                    icon={<i className="fa fa-facebook"></i>}
                                />
                            </div>}

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
    registerWithFacebook: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,

}

export default connect(mapStateToProps, { setAlert, registerWithFacebook })(AuthForm)
