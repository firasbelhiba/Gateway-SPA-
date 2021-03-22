import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const Alert = ({ alerts }) => alerts !== null &&
    alerts.length > 0 && alerts.map((alert) => (
        <div key={alert.id} className={`alert alert-danger`}>
            {alert.message}
        </div>

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


