import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Experience_item from './Items/Experience_item'
import Alert from '../../../Shared/layouts/Alert'



export const Experience = (props) => {
    return (
        <div className="user-profile-ov st2">
            <Alert />
            <h3>
                <a href="#" title="" className="exp-bx-open">Experience</a>
                <Link to='/create-experience' title=""
                ><i className="fa fa-plus-square"></i></Link>
            </h3>
            {props.experience.length === 0 ?
                <Fragment>
                    <h1 className="mb-4">You have no experiences added yet</h1>
                    <Link to='/create-experience' title=""
                    ><i className="fa fa-plus-square"></i>Click here to add one</Link>
                </Fragment>
                :
                <Fragment>
                    <Experience_item experience={props.experience} />
                </Fragment>
            }
        </div>
    )
}
