import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteExperience } from '../../../../actions/profile';
import Experience_edit_form from '../../Forms/Experience_edit_form';


const Experience_item = ({ experience, deleteExperience, showActions }) => {
    const [formState, toggleState] = useState("");
    let classActive = "";
    if (formState === "add") {
        classActive = "active";
    }

    if (formState === "") {
        classActive = "";
    }

    const experiences = experience.map(item => (
        <div key={item._id}>
            <h4 style={{ color: '#17a2b8' }}>
                {item.company}
                {showActions &&
                    <Fragment>
                        <a onClick={() => toggleState("add")}
                            className="post-jb active"
                            title=""
                            style={{ cursor: 'pointer' }} title=""><i className="fa fa-pencil"></i></a>
                        <a title="" onClick={() => deleteExperience(item._id)}><i className="fa fa-trash"></i></a>
                    </Fragment>
                }

            </h4>
            <h4>
                {item.title}
            </h4>
            <h2 className="mt-2" style={{ color: '#8a97a0' }}>
                <Moment format='YYYY/MM/DD'>{item.from}</Moment>-{' '}
                {item.to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>{item.to}</Moment>)}
            </h2>
            <p>
                {item.description}
            </p>
            <div className={`post-popup job_post ${classActive}`} >
                <div className="post-project" >
                    <h3 style={{ color: 'white', marginBottom: "0px" }}>Add a post
                    <a onClick={() => toggleState("")} title="">
                            <i
                                className="la la-times-circle-o mr-2"
                                style={{ color: "white", float: "right" }}
                            ></i>
                        </a>
                    </h3>
                    <Experience_edit_form id={item._id} />

                </div>
            </div>
        </div >

    ));
    return (
        <Fragment>
            {experiences}
        </Fragment>
    )
}

Experience_item.defaultProps = {
    showActions: true,
};

Experience_item.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired

};

export default connect(null, { deleteExperience })(Experience_item);
