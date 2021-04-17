import React, { Fragment, useState } from 'react';

import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'



const AuthForm = ({ isAuthenticated }) => {

    const [formData, setFormData] = useState({
        password: '',
        password2: '',
        token: ''
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
                                        <button type="submit" value="submit">
                                            Reset password
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AuthForm
