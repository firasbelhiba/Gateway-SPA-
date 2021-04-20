import React, { Fragment } from 'react'

const Desactivate_account = () => {
    return (
        <Fragment>
            <div
                className="tab-pane fade"
                id="nav-deactivate"
                role="tabpanel"
                aria-labelledby="nav-deactivate-tab"
            >
                <div className="acc-setting">
                    <h3>Deactivate Account</h3>
                    <form>
                        <div className="cp-field">
                            <h5>Email</h5>
                            <div className="cpp-fiel">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                />
                                <i className="fa fa-envelope"></i>
                            </div>
                        </div>
                        <div className="cp-field">
                            <h5>Password</h5>
                            <div className="cpp-fiel">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <i className="fa fa-lock"></i>
                            </div>
                        </div>
                        <div className="cp-field">
                            <h5>Please Explain Further</h5>
                            <textarea></textarea>
                        </div>
                        <div className="cp-field">
                            <div className="fgt-sec">
                                <input type="checkbox" name="cc" id="c4" />
                                <label htmlFor="c4">
                                    <span></span>
                                </label>
                                <small>Email option out</small>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Vivamus pretium nulla quis erat dapibus,
                                varius hendrerit neque suscipit. Integer in ex
                                euismod, posuere lectus id,
                                                    </p>
                        </div>
                        <div className="save-stngs pd3">
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

export default Desactivate_account
