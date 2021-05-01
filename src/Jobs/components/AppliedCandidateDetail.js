import React,{Fragment,useState,useEffect} from 'react'
import moment from 'moment';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJobs , setActive ,getJobByUser} from '../../actions/Job';
import PropTypes from 'prop-types';
import AcceptCandidate from './AcceptCandidate';


const AppliedCandidateDetail = ({job,Job:{jobs},profile:{profile}}) => {

    const [total,setTotal] = useState({});

    useEffect(  () =>  {
        async function anyNameFunction() {
       
          const response = await axios.get(`http://localhost:5000/api/jobs/Details/jobs/${job._id}`);
            
            setTotal(response.data);   
             
        }   
        anyNameFunction();
        
          }
        ,[jobs])
    return (
        <Fragment>
            <div className="post-bar">
                            <div className="post_topbar">
                              <div className="usy-dt">
                                <img src={profile.avatar} alt="" width="50"/>
                                <div className="usy-name">
                                 <h3>{profile.name}</h3>
                                  <span><img src="assets/images/clock.png" alt="" />{moment(job.date).fromNow()}</span>
                                </div>
                              </div>
                              <div className="ed-opts">
                                
                               
                              </div>
                            </div>
                            <div className="epi-sec">
                              <ul className="descp">
                                <li><img src="assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                <li><img src="assets/images/icon9.png" alt="" /><span>{job.location}</span></li>
                              </ul>
                             
                            </div>
                            <div className="job_descp">
                              <h3 className="text-center"><span style={{ color: 'red' }}>job type</span> : {job.title}</h3>
                              
                            </div>
                           
                            
                            
                          </div>
                { job.candidates.length === 0 ? (
                    <Fragment>     
                         <div className="post-bar">
                          <p className='text-center'>No candidates to show...</p>
                          </div>  
                 </Fragment>
                ) : (
        job.candidates.map((acceptJob) => <AcceptCandidate acceptJob={acceptJob} job={job} key={acceptJob._id} />)

                )}
               
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
    { getJobByUser ,setActive }
  )(AppliedCandidateDetail);

