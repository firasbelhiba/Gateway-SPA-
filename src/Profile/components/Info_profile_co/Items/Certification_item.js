import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { deleteCertification } from '../../../../actions/profile';
import { Link } from 'react-router-dom';



const Certification_item = ({ certification, deleteCertification, showActions }) => {
    const Certifications = certification.map(item => (
        <div key={item._id}>
            <h4 style={{ color: '#17a2b8' }}>
                {item.title}
                {
                    showActions &&
                    <Fragment>
                        <Link to={`/edit-certification?id=${item._id}`} title=""><i className="fa fa-pencil"></i></Link>
                        <a onClick={() => deleteCertification(item._id)} title=""><i className="fa fa-trash"></i></a>
                    </Fragment>
                }
            </h4>
            <h4>
                {item.field}
            </h4>
            <h2 className="mt-2" style={{ color: '#8a97a0' }}>
                <Moment format='YYYY/MM/DD'>{item.from}</Moment>-{' '}
                {item.to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>{item.to}</Moment>)}
            </h2>
            <p>
                {item.code}
            </p>
        </div>
    ));
    return (
        <div>
            {Certifications}
        </div>
    )
}

Certification_item.propTypes = {
    certification: PropTypes.array.isRequired,
    deleteCertification: PropTypes.func.isRequired

};

export default connect(null, { deleteCertification })(Certification_item);
