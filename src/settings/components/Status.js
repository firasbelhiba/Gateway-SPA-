import React, { Fragment } from 'react'

const Status = () => {
    return (
        <Fragment>
            <div
                className="tab-pane fade"
                id="nav-status"
                role="tabpanel"
                aria-labelledby="nav-status-tab"
            >
                <div className="acc-setting">
                    <h3>Profile Status</h3>
                    <div className="profile-bx-details">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="profile-bx-info">
                                    <div className="pro-bx">
                                        <img src="images/pro-icon1.png" alt="" />
                                        <div className="bx-info">
                                            <h3>$5,145</h3>
                                            <h5>Total Income</h5>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing.
                                                            </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="profile-bx-info">
                                    <div className="pro-bx">
                                        <img src="images/pro-icon2.png" alt="" />
                                        <div className="bx-info">
                                            <h3>$4,745</h3>
                                            <h5>Widthraw</h5>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing.
                                                            </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="profile-bx-info">
                                    <div className="pro-bx">
                                        <img src="images/pro-icon3.png" alt="" />
                                        <div className="bx-info">
                                            <h3>$1,145</h3>
                                            <h5>Sent</h5>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing.
                                                            </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="profile-bx-info">
                                    <div className="pro-bx">
                                        <img src="images/pro-icon4.png" alt="" />
                                        <div className="bx-info">
                                            <h3>130</h3>
                                            <h5>Total Projects</h5>
                                        </div>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing.
                                                            </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pro-work-status"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Status
