import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Education_item from './Items/Education_item'

export const Education = (props) => {
    return (
        <div className="user-profile-ov">
            <h3>
                <a href="#" title="" className="ed-box-open">Education</a>
                <a href="#" title=""
                ><i className="fa fa-pencil"></i></a>
                <Link to="/create-education" title=""><i className="fa fa-plus-square"></i></Link>
            </h3>
            {props.education == null ? <h1>You have no education added yet</h1> :
                <Fragment>
                    <Education_item education={props.education} />
                </Fragment>
            }
        </div>
    )
}
