import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const Experience_item = ({ experience }) => {
    const experiences = experience.map(item => (
        <div key={item._id}>
            <h4>
                {item.company}
                <a href="#" title=""><i className="fa fa-pencil"></i></a>
                <a href="#" title=""><i className="fa fa-trash"></i></a>

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
    experience: PropTypes.array.isRequired
};

export default Experience_item
