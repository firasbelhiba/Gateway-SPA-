import React,{Fragment,useEffect,useState} from 'react'
import SavedJobDetail from './SavedJobDetail'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJobs , setActive ,getJobByUser,} from '../../actions/Job';
import {getCurrentProfile} from '../../actions/profile';
import PropTypes from 'prop-types';

const SavedJobs = ({profile:{profile,loading},getCurrentProfile}) => {
 

    useEffect(() => {
        getCurrentProfile() 
        console.log(profile)
    }, [])
    return (
        <Fragment>
             <div
                    className="tab-pane fade"
                    id="saved"
                    role="tabpanel"
                    aria-labelledby="saved-tab"
                >
                     {!loading && profile.savedJobs.length === 0 ? (
        <p className='center'>No jobs to show...</p>
      ) : (
        
        profile.savedJobs.map((savedJob) => <SavedJobDetail savedJob={savedJob} key={savedJob._id} />)
      )}
            {console.log(profile.savedJobs)}       
                    
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
  )(SavedJobs);

