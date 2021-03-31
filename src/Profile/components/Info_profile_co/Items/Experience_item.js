import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-redux';

const Experience_item = ({ experience }) => {
    // // const experiences = experience.map(item => (
    // //     <div key={item._id}>
    // //         <h4>
    // //             {item.company}
    // //             <a href="#" title=""><i className="fa fa-pencil"></i></a>
    // //         </h4>
    // //         <p>
    // //             {item.description}
    // //         </p>
    // //     </div>
    // // ));
    return (
        <Fragment>
            {/* {experiences} */}
        </Fragment>
    )
}

Experience_item.propTypes = {
    experience: PropTypes.array.isRequired
};

export default Experience_item
