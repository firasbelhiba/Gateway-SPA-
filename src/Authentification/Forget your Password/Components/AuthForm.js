import React, { useState } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../../actions/auth';
import { Redirect } from 'react-router';


const AuthForm = ({ isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

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

                <div className="sign_in_sec current" id="tab-1">
                    <h3>Reset your password</h3>
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
                                <button type="submit" value="submit">Send</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

AuthForm.propTypes = {
    isAuthenticated: PropTypes.bool,
}

export default connect(mapStateToProps)(AuthForm)
