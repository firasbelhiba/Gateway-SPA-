import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Experience_item from './Items/Experience_item'



export const Experience = (props) => {
    return (
        <div className="user-profile-ov st2">
            <h3>
                <a href="#" title="" className="exp-bx-open">Experience</a>
                <a title=""
                ><i className="fa fa-pencil"></i></a>
                <Link to='/create-experience' title=""
                ><i className="fa fa-plus-square"></i></Link>
            </h3>
            {props.experience == null ? <h1>You have no experiences added yet</h1> :
                <Fragment>
                    <Experience_item experience={props.experience} />
                </Fragment>
            }
        </div>
    )
}
