import React, { Fragment } from 'react'
import Account_settings from '../components/Account_settings'
import Status from '../components/Status'
import Change_password from '../components/Change_password'
import Notification from '../components/Notification'
import Requests from '../components/Requests'
import Security_and_login from '../components/Security_and_login'
import Blocking from '../components/Blocking'
import Privacy from '../components/Privacy'
import Desactivate_account from '../components/Desactivate_account'


const Settings = () => {
    return (
        <Fragment>
            <section className="profile-account-setting">
                <div className="container">
                    <div className="account-tabs-setting">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="acc-leftbar">
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a
                                            className="nav-item nav-link active"
                                            id="nav-acc-tab"
                                            data-toggle="tab"
                                            href="#nav-acc"
                                            role="tab"
                                            aria-controls="nav-acc"
                                            aria-selected="true"
                                        ><i className="la la-cogs"></i>Account Setting</a
                                        >
                                        <a
                                            className="nav-item nav-link"
                                            id="nav-status-tab"
                                            data-toggle="tab"
                                            href="#nav-status"
                                            role="tab"
                                            aria-controls="nav-status"
                                            aria-selected="false"
                                        ><i className="fa fa-line-chart"></i>Status</a
                                        >
                                        <a
                                            className="nav-item nav-link"
                                            id="nav-password-tab"
                                            data-toggle="tab"
                                            href="#nav-password"
                                            role="tab"
                                            aria-controls="nav-password"
                                            aria-selected="false"
                                        ><i className="fa fa-lock"></i>Change Password</a
                                        >
                                        <a
                                            className="nav-item nav-link"
                                            id="nav-notification-tab"
                                            data-toggle="tab"
                                            href="#nav-notification"
                                            role="tab"
                                            aria-controls="nav-notification"
                                            aria-selected="false"
                                        ><i className="fa fa-flash"></i>Notifications</a
                                        >
                                        <a
                                            className="nav-item nav-link"
                                            id="nav-privcy-tab"
                                            data-toggle="tab"
                                            href="#privcy"
                                            role="tab"
                                            aria-controls="privacy"
                                            aria-selected="false"
                                        ><i className="fa fa-group"></i>Requests</a
                                        >
                                        <a
                                            className="nav-item nav-link"
                                            id="security"
                                            data-toggle="tab"
                                            href="#security-login"
                                            role="tab"
                                            aria-controls="security-login"
                                            aria-selected="false"
                                        ><i className="fa fa-user-secret"></i>Security and Login</a
                                        >
                                        <a
                                            className="nav-item nav-link"
                                            id="nav-privacy-tab"
                                            data-toggle="tab"
                                            href="#privacy"
                                            role="tab"
                                            aria-controls="privacy"
                                            aria-selected="false"
                                        ><i className="fa fa-paw"></i>Privacy</a
                                        >
                                        <a
                                            className="nav-item nav-link"
                                            id="nav-blockking-tab"
                                            data-toggle="tab"
                                            href="#blockking"
                                            role="tab"
                                            aria-controls="blockking"
                                            aria-selected="false"
                                        ><i className="fa fa-cc-diners-club"></i>Blocking</a
                                        >
                                        <a
                                            className="nav-item nav-link"
                                            id="nav-deactivate-tab"
                                            data-toggle="tab"
                                            href="#nav-deactivate"
                                            role="tab"
                                            aria-controls="nav-deactivate"
                                            aria-selected="false"
                                        ><i className="fa fa-random"></i>Deactivate Account</a
                                        >
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="tab-content" id="nav-tabContent">
                                    <Account_settings />
                                    <Status />
                                    <Change_password />
                                    <Notification />
                                    <Requests />
                                    <Security_and_login />
                                    <Blocking />
                                    <Privacy />
                                    <Desactivate_account />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Settings
