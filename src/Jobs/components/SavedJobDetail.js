import React,{Fragment,useState,useEffect} from 'react'
import moment from 'moment';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJobs , setActive ,getJobByUser,deleteJob,saveJob} from '../../actions/Job';
import PropTypes from 'prop-types';

const SavedJobDetail = ({savedJob,saveJob,Job:{jobs}}) => {

 const [job, setJob] = useState({});
 const [ total,setTotal] = useState({});

  useEffect(() => {
   
    async function anyNameFunction() {

      const res = await axios.get(`http://localhost:5000/api/jobs/${savedJob.job}`);
        
      setJob(res.data);

      const response = await axios.get(`http://localhost:5000/api/jobs/Details/jobs/${savedJob.job}`);
            
      setTotal(response.data);   
           
    }   
    anyNameFunction();

  }, [jobs])
    return (
        <Fragment>
             <div className="post-bar">
                        <div className="p-all saved-post">
                            <div className="usy-dt">
                                <div className="wordpressdevlp">
                                    <h2>{job.title}</h2>
                                    <p>
                                        <i className="la la-clock-o"></i>Posted on {moment(job.date).fromNow()}
                                                                        </p>
                                </div>
                            </div>
                            <div className="ed-opts">
                                <a href="#" title="" className="ed-opts-open"
                                ><i className="la la-ellipsis-v"></i></a>
                                <ul className="ed-options">
                                    <li><a href="#" title="">Edit Post</a></li>
                                    <li><a href="#" title="">Unsaved</a></li>
                                    <li><a href="#" title="">Unbid</a></li>
                                    <li><a href="#" title="">Close</a></li>
                                    <li><a href="#" title="">Hide</a></li>
                                </ul>
                            </div>
                        </div>
                        <ul className="savedjob-info saved-info">
                            <li>
                                <h3>Applicants</h3>
                                <p>{total.totalcandidates}</p>
                            </li>
                            <li>
                                <h3>Availability</h3>
                                <p>{job.availability}</p>
                            </li>
                            <li>
                                <h3>Salary</h3>
                                <p>${job.price} - Mannual</p>
                            </li>
                            <li>
                                <h3>Posted :{moment(job.date).fromNow()}</h3>
                                {job.appliedTo!==undefined?<p>close</p>:<p>open</p>}
                                {console.log(job.appliedTo)}
                                
                            </li>
                            <div className="devepbtn saved-btn">
                                <Link className="clrbtn" to="/myprofile"onClick={()=>{saveJob(savedJob.job)}}>Unsaved</Link>
                                <a className="clrbtn" href="#">Message</a>
                            </div>
                        </ul>
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
    { getJobByUser ,setActive ,deleteJob,saveJob}
  )(SavedJobDetail);


