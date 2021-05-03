import React, { Fragment } from 'react'
import { Line } from 'react-chartjs-2/dist'

const Status = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Views for 2020',
                data: [0, 1, 14, 12]
            }
        ]
    }
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
                                            <h3>0</h3>
                                            <h5>Total Visitors</h5>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="profile-bx-info">
                                    <div className="pro-bx">
                                        <img src="images/pro-icon2.png" alt="" />
                                        <div className="bx-info">
                                            <h3>0</h3>
                                            <h5>Total posts</h5>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="profile-bx-info">
                                    <div className="pro-bx">
                                        <img src="images/pro-icon3.png" alt="" />
                                        <div className="bx-info">
                                            <h3>0</h3>
                                            <h5>Total following</h5>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="profile-bx-info">
                                    <div className="pro-bx">
                                        <img src="images/pro-icon4.png" alt="" />
                                        <div className="bx-info">
                                            <h3>0</h3>
                                            <h5>Total followers</h5>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <Line data={data} />

                        </div>
                    </div>
                    <div className="pro-work-status"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Status
