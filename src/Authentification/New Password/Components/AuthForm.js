import React, { Fragment, useState } from 'react';

import { connect } from 'react-redux';
import { setAlert } from '../../../actions/alert';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import { useLocation } from "react-router-dom";
import { setNewPassword } from "../../../actions/auth";
import Alert from "../../../Shared/layouts/Alert";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const AuthForm = ({ setNewPassword, isAuthenticated }) => {

    let query = useQuery();

    const [formData, setFormData] = useState({
        password: '',
        password2: '',
        token: query.get("id")
    });

    const { password, password2, token } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('password does not match', 'danger');


        } else {
            setNewPassword(password, token);
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

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

AuthForm.propTypes = {
    isAuthenticated: PropTypes.bool,
    setNewPassword: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { setNewPassword })(AuthForm)
