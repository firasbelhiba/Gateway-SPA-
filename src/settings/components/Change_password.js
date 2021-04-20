import React, { Fragment } from 'react'

const Change_password = () => {
    return (
        <Fragment>
            <div
                className="tab-pane fade"
                id="nav-password"
                role="tabpanel"
                aria-labelledby="nav-password-tab"
            >
                <div className="acc-setting">
                    <h3>Account Setting</h3>
                    <form>
                        <div className="cp-field">
                            <h5>Old Password</h5>
                            <div className="cpp-fiel">
                                <input
                                    type="text"
                                    name="old-password"
                                    placeholder="Old Password"
                                />
                                <i className="fa fa-lock"></i>
                            </div>
                        </div>
                        <div className="cp-field">
                            <h5>New Password</h5>
                            <div className="cpp-fiel">
                                <input
                                    type="text"
                                    name="new-password"
                                    placeholder="New Password"
                                />
                                <i className="fa fa-lock"></i>
                            </div>
                        </div>
                        <div className="cp-field">
                            <h5>Repeat Password</h5>
                            <div className="cpp-fiel">
                                <input
                                    type="text"
                                    name="repeat-password"
                                    placeholder="Repeat Password"
                                />
                                <i className="fa fa-lock"></i>
                            </div>
                        </div>
                        <div className="cp-field">
                            <h5><a href="#" title="">Forgot Password?</a></h5>
                        </div>
                        <div className="save-stngs pd2">
                            <ul>
                                <li><button type="submit">Save Setting</button></li>
                                <li>
                                    <button type="submit">Restore Setting</button>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default Change_password
