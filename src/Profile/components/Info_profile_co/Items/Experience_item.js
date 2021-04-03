import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteExperience } from '../../../../actions/profile';


const Experience_item = ({ experience, deleteExperience }) => {
    const experiences = experience.map(item => (
        <div key={item._id}>
            <h4 style={{ color: '#17a2b8' }}>
                {item.company}
                <a href="#" title=""><i className="fa fa-pencil"></i></a>
                <a title="" onClick={() => deleteExperience(item._id)}><i className="fa fa-trash"></i></a>
            </h4>
            <h1>
                {item.title}
            </h1>
            <h2 className="mt-2" style={{ color: '#8a97a0' }}>
                <Moment format='YYYY/MM/DD'>{item.from}</Moment>-{' '}
                {item.to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>{item.to}</Moment>)}
            </h2>
            <p>
                {item.description}
            </p>
        </div>
    ));
    return (
        <Fragment>
            {experiences}
        </Fragment>
    )
}

Experience_item.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired

};

export default connect(null, { deleteExperience })(Experience_item);
