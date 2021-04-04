import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Certification_item from './Items/Certification_item'
import Alert from '../../../Shared/layouts/Alert'



const Certification = (props) => {
    return (
        <div>
            <div className="user-profile-ov st2">
                <h3>
                    <Alert />
                    <a href="#" title="" className="exp-bx-open">Certification</a>
                    <a title=""
                    ><i className="fa fa-pencil"></i></a>
                    <Link to='/create-certification' title=""
                    ><i className="fa fa-plus-square"></i></Link>
                </h3>
                {props.certification.length === 0 ?
                    <Fragment>
                        <h1 className="mb-4">You have no Certification added yet</h1>
                        <Link to='/create-certification' title=""
                        ><i className="fa fa-plus-square"></i>Click here to add one</Link>
                    </Fragment>
                    :
                    <Fragment>
                        <Certification_item certification={props.certification} />
                    </Fragment>
                }

            </div>
        </div>
    )
}

export default Certification
