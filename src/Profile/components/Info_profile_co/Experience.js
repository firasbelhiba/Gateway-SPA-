import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Experience_item from './Items/Experience_item'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Experience = ({ experience, showActions }) => {
    return (
        <div className="user-profile-ov st2">
            <ToastContainer />
            <h3>
                <a href="#" title="" className="exp-bx-open">Experience</a>
                {
                    showActions &&
                    <Link to='/create-experience' title=""
                    ><i className="fa fa-plus-square"></i></Link>
                }

            </h3>
            {experience.length === 0 ?
                <Fragment>
                    <h1 className="mb-4">You have no experiences added yet</h1>
                    {
                        showActions &&
                        <Link to='/create-experience' title=""
                        >Click here to add one{' '}<i className="fa fa-plus-square"></i></Link>
                    }
                </Fragment>
                :
                <Fragment>
                    <Experience_item experience={experience} showActions={showActions} />
                </Fragment>
            }
        </div>
    )
}

Experience.defaultProps = {
    showActions: true,
};
