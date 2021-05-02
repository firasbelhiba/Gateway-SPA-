import React, { Fragment } from 'react'
import ReactProgressMeter from 'react-progress-meter'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export const Bids_profile = () => {

    const percentage = 66;


    return (
        <Fragment>

            <div className="user-profile-ov">
                <h3>
                    <a title="" className="overview-open">Total Score : </a>
                </h3>
                <h2>
                    <a title="" className="overview-open">Level : </a>
                </h2>
                <p className="ml-4">
                    <ReactProgressMeter
                        currentProgress={25}
                        showPercent={true}
                        show={true}
                        color="cyan"
                        width="400px"
                    />
                </p>
            </div>

            <div className="user-profile-ov">
                <h3>
                    <a title="" className="overview-open">Score per category :</a>
                </h3>
            </div>
            <div className="user-profile-ov">
                <h3>
                    <a title="" className="overview-open">Category</a>
                </h3>
                <h2>
                    <a title="" className="overview-open">Badge : </a>
                </h2>
                <p>
                    Score :
                    <div style={{ width: '100px', height: '100px', float: 'right' }}>
                        <CircularProgressbar
                            value={60}
                            text={`${percentage}%`}
                        />;
                    </div>
                </p>
            </div>

        </Fragment>
    )
}
