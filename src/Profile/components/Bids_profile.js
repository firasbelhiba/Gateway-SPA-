import React, { Fragment } from 'react'
import ReactProgressMeter from 'react-progress-meter'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export const Bids_profile = ({ score }) => {

    const percentage = 66;


    return (
        <Fragment>

            <div className="user-profile-ov">
                <h3>
                    <a title="" className="overview-open">Total Score : {score[0].total_score} </a>
                </h3>
                <h2>
                    <a title="" className="overview-open">Level {score[0].level} </a>
                </h2>
                <p className="ml-4">
                    <ReactProgressMeter
                        currentProgress={50}
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
            {score[0].per_category.map(item => (
                <div className="user-profile-ov">
                    <h3>
                        <a title="" className="overview-open">{item.category}</a>
                    </h3>
                    <h2>
                        <a title="" className="overview-open">Badge : {item.badge}
                            {item.score >= 0 && item.score < 1000 && <img style={{ width: '200px', height: '200px' }} src="assets/images/Badges/Beginner.png" />}
                            {item.score >= 1000 && item.score < 3000 && <img style={{ width: '200px', height: '200px' }} src="assets/images/Badges/Intermediate.png" />}
                            {item.score >= 3000 && item.score < 6000 && <img style={{ width: '200px', height: '200px' }} src="assets/images/Badges/Advanced.png" />}
                            {item.score >= 6000 && item.score < 12000 && <img style={{ width: '200px', height: '200px' }} src="assets/images/Badges/Expert.png" />}
                            {item.score >= 12000 && <img style={{ width: '200px', height: '200px' }} src="assets/images/Badges/Master.png" />}
                        </a>
                    </h2>
                    <p>
                        Score : {item.score}
                        <div style={{ width: '100px', height: '100px', float: 'right' }}>
                            <CircularProgressbar
                                value={60}
                                text={`${percentage}%`}
                            />;
                    </div>
                    </p>
                </div>
            ))}

        </Fragment>
    )
}
