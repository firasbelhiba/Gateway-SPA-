import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Education_item from './Items/Education_item'
import Alert from '../../../Shared/layouts/Alert'


export const Education = (props) => {
    return (
        <div className="user-profile-ov">
            <Alert />
            <h3>
                <a href="#" title="" className="ed-box-open">Education</a>
                <a href="#" title=""
                ><i className="fa fa-pencil"></i></a>
                <Link to="/create-education" title=""><i className="fa fa-plus-square"></i></Link>
            </h3>
            {props.education.length === 0 ?
                <Fragment>
                    <h1 className="mb-4">You have no education added yet</h1>
                    <Link to='/create-education' title=""
                    >Click here to add one{' '}<i className="fa fa-plus-square"></i></Link>
                </Fragment>
                :
                <Fragment>
                    <Education_item education={props.education} />
                </Fragment>
            }
        </div>
    )
}
