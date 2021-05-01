import AppliedCandidateDetail from './AppliedCandidateDetail'
import React,{Fragment,useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJobs , setActive ,getJobByUser,} from '../../actions/Job';
import PropTypes from 'prop-types';


const AppliedCandidates = ({ Job: { jobs, loading },auth:{user},getJobByUser ,setActive }) => {

    useEffect(() => {
        
        
        getJobByUser()   
       console.log(jobs)
           
         }, [])
   
    return (
        <Fragment>
                      <div
                    className="tab-pane fade"
                    id="cadidates"
                    role="tabpanel"
                    aria-labelledby="cadidates-tab"
                >
                    {!loading && jobs.length === 0 ? (
        <p className='center'>No jobs to show...</p>
      ) : (
        jobs.map((job) => <AppliedCandidateDetail job={job} key={job._id} />)
      )}
       
                </div>
        </Fragment>
    )
}
const mapStateToProps = state => ({
    Job: state.Job,
    auth: state.auth,
  });
  
  export default connect(
    mapStateToProps,
    { getJobByUser ,setActive }
  )(AppliedCandidates);


