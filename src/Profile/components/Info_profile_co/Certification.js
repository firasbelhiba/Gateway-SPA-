import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Certification_item from './Items/Certification_item'


const Certification = (props) => {
    return (
        <div>
            <div className="user-profile-ov st2">
                <h3>
                    <a href="#" title="" className="exp-bx-open">Certification</a>
                    <a title=""
                    ><i className="fa fa-pencil"></i></a>
                    <Link to='/create-certification' title=""
                    ><i className="fa fa-plus-square"></i></Link>
                </h3>
                {props.certification.length === 0 ? <h1>You have no certification added yet</h1> :
                    <Fragment>
                        <Certification_item certification={props.certification} />
                    </Fragment>
                }

            </div>
        </div>
    )
}

export default Certification
