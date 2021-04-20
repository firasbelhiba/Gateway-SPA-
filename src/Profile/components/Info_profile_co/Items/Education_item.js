import React, { Fragment } from 'react'
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEducation } from '../../../../actions/profile';
import { Link } from 'react-router-dom';



const Education_item = ({ education, deleteEducation, showActions }) => {

    const educations = education.map(item => (
        <div key={item._id}>
            <h4 className="mt-4" style={{ color: '#17a2b8' }}>{item.school}
                {showActions &&
                    <Fragment>
                        <Link to={`/edit-education?id=${item._id}`} title=""><i className="fa fa-pencil"></i></Link>
                        <a title="" onClick={() => deleteEducation(item._id)}><i className="fa fa-trash"></i></a>
                    </Fragment>
                }
            </h4>


            <h1>{item.degree}</h1>
            <h1 className="mt-2 mb-2">Field of study : {item.fieldofstudy}</h1>
            <span style={{ color: '#8a97a0' }}>
                <Moment format='YYYY/MM/DD'>{item.from}</Moment>-{' '}
                {item.to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>{item.to}</Moment>)}
            </span>
            <p>
                {item.description}
            </p>
        </div>
    ));

    return (
        <Fragment>
            {educations}
        </Fragment>
    )
}

Education_item.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired

};

export default connect(null, { deleteEducation })(Education_item);
