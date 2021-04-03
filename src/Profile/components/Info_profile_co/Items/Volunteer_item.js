import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';

const Volunteer_item = ({ volunteer }) => {
    const Volunteers = volunteer.map(item => (
        <div key={item._id}>
            <h4 style={{ color: '#17a2b8' }}>
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
            {Volunteers}
        </Fragment>
    )
}

Volunteer_item.propTypes = {
    volunteer: PropTypes.array.isRequired
};

export default Volunteer_item
