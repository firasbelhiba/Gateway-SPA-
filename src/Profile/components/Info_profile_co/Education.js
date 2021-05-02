import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Education_item from './Items/Education_item'
import Alert from '../../../Shared/layouts/Alert'


export const Education = ({ education, showActions }) => {
    return (
        <div className="user-profile-ov">
            <Alert />
            <h3>
                <a href="#" title="" className="ed-box-open">Education</a>
                {
                    showActions &&
                    <Link to="/create-education" title=""><i className="fa fa-plus-square"></i></Link>
                }

            </h3>
            {education.length === 0 ?
                <Fragment>
                    <h4 className="mb-4">You have no education added yet</h4>
                    {
                        showActions &&
                        <Link to='/create-education' title=""
                        >Click here to add one{' '}<i className="fa fa-plus-square"></i></Link>
                    }

                </Fragment>
                :
                <Fragment>
                    <Education_item education={education} showActions={showActions} />
                </Fragment>
            }
        </div>
    )
}

Education.defaultProps = {
    showActions: true,
};