import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteVolunteer } from '../../../../actions/profile';
import { Link } from 'react-router-dom';


const Volunteer_item = ({ volunteer, deleteVolunteer, showActions }) => {
    const Volunteers = volunteer.map(item => (
        <div key={item._id}>
            <h4 style={{ color: '#17a2b8' }}>
                {item.company}
                {
                    showActions && <Fragment>
                        <Link to={`/edit-volunteer?id=${item._id}`} title=""><i className="fa fa-pencil"></i></Link>
                        <a onClick={() => deleteVolunteer(item._id)} title=""><i className="fa fa-trash"></i></a>
                    </Fragment>
                }

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
    volunteer: PropTypes.array.isRequired,
    deleteVolunteer: PropTypes.func.isRequired

};

export default connect(null, { deleteVolunteer })(Volunteer_item);
