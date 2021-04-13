import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Certification_item from './Items/Certification_item'
import Alert from '../../../Shared/layouts/Alert'



const Certification = ({ certification, showActions }) => {
    return (
        <div>
            <div className="user-profile-ov st2">
                <h3>
                    <Alert />
                    <a href="#" title="" className="exp-bx-open">Certification</a>
                    {
                        showActions &&
                        <Link to='/create-certification' title=""
                        ><i className="fa fa-plus-square"></i></Link>
                    }
                </h3>
                {certification.length === 0 ?
                    <Fragment>
                        <h1 className="mb-4">You have no Certification added yet</h1>
                        {
                            showActions &&
                            <Link to='/create-certification' title=""
                            >Click here to add one{' '}<i className="fa fa-plus-square"></i></Link>
                        }
                    </Fragment>
                    :
                    <Fragment>
                        <Certification_item certification={certification} showActions={showActions} />
                    </Fragment>
                }

            </div>
        </div>
    )
}

Certification.defaultProps = {
    showActions: true,
};

export default Certification
