
import AppliedJobDetail from './AppliedJobDetail'
import React,{Fragment,useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJobs , setActive ,getJobByUser,} from '../../actions/Job';
import {getCurrentProfile} from '../../actions/profile';
import PropTypes from 'prop-types';

const AppliedJobs = ({profile:{profile,loading},getCurrentProfile}) => {
    return (
        <Fragment>
             <div
                    className="tab-pane fade"
                    id="applied"
                    role="tabpanel"
                    aria-labelledby="applied-tab"
                >
                     {!loading && profile.savedJobs.length === 0 ? (
        <p className='center'>No jobs to show...</p>
      ) : (
        profile.savedJobs.map((savedJob) => <AppliedJobDetail savedJob={savedJob} key={savedJob._id} />)
      )}
                 
                    
                </div>
        </Fragment>
    )
}
const mapStateToProps = state => ({
    Job: state.Job,
    auth: state.auth,
    profile :state.profile,
  });
  
  export default connect(
    mapStateToProps,
    { getJobByUser ,setActive,getCurrentProfile }
  )(AppliedJobs);


