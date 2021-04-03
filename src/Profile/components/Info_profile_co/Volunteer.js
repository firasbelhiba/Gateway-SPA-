import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Volunteer_item from './Items/Volunteer_item'



const Volunteer = (props) => {
    return (
        <div>
            <div className="user-profile-ov st2">
                <h3>
                    <a href="#" title="" className="exp-bx-open">Volunteer</a>
                    <a title=""
                    ><i className="fa fa-pencil"></i></a>
                    <Link to='/create-volunteer' title=""
                    ><i className="fa fa-plus-square"></i></Link>
                </h3>
                {props.volunteer == null ? <h1>You have no volunteer experiences added yet</h1> :
                    <Fragment>
                        <Volunteer_item volunteer={props.volunteer} />
                    </Fragment>
                }

            </div>
        </div>
    )
}

export default Volunteer
