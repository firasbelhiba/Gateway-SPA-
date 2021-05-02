import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Volunteer_item from './Items/Volunteer_item'
import Alert from '../../../Shared/layouts/Alert'




const Volunteer = ({ volunteer, showActions }) => {
    return (
        <div>
            <div className="user-profile-ov st2">
                <Alert />
                <h3>
                    <a href="#" title="" className="exp-bx-open">Volunteer</a>
                    {
                        showActions &&
                        <Link to='/create-volunteer' title=""
                        ><i className="fa fa-plus-square"></i></Link>
                    }
                </h3>
                {volunteer.length === 0 ?

                    <Fragment>
                        <h4 className="mb-4">You have no volunteer experiences added yet</h4>
                        {
                            showActions &&
                            <Link to='/create-volunteer' title=""
                            >Click here to add one{' '}<i className="fa fa-plus-square"></i></Link>
                        }
                    </Fragment>
                    :
                    <Fragment>
                        <Volunteer_item volunteer={volunteer} showActions={showActions} />
                    </Fragment>
                }

            </div>
        </div>
    )
}

Volunteer.defaultProps = {
    showActions: true,
};


export default Volunteer
