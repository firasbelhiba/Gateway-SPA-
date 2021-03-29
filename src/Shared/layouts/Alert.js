import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Alert = ({ alerts }) => alerts !== null &&
    alerts.length > 0 && alerts.map((alert) => (
        <Fragment>
            <div className="square_box box_three"></div>
            <div className="square_box box_four"></div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className={`alert fade alert-simple alert-${alert.alertType} alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show`} role="alert" data-brk-library="component__alert">
                            <button type="button" className="close font__size-18" data-dismiss="alert">
                                <span aria-hidden="true">
                                    <i className="fa fa-times danger "></i>
                                </span>
                                <span className="sr-only">Close</span>
                            </button>
                            <i className="start-icon far fa-times-circle faa-pulse animated"></i>
                            <strong className="font__weight-semibold">{alert.msg}</strong>
                        </div>
                    </div>


                </div>
            </div>
        </Fragment>


    ))

Alert.propTypes = {
    // alerts needs to be a prop so we need to add that here
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    // we are getting this state from the route reducer
    alerts: state.alert
})


export default connect(mapStateToProps)(Alert);


