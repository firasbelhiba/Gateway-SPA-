import React,{Fragment,useState,useEffect} from 'react'
import moment from 'moment';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJobs , setActive ,getJobByUser,deleteJob,addCandidature} from '../../actions/Job';
import PropTypes from 'prop-types';


const AppliedJobDetail = ({savedJob,Job:{jobs},addCandidature,auth:{user}}) => {

const [job, setJob] = useState({});
 const [ total,setTotal] = useState({});
const [ active,setActive] = useState(false);

  useEffect(() => {
   
    async function anyNameFunction() {

      const res = await axios.get(`http://localhost:5000/api/jobs/${savedJob.job}`);
        
      setJob(res.data);

      const response = await axios.get(`http://localhost:5000/api/jobs/Details/jobs/${savedJob.job}`);
            
      setTotal(response.data);   

      const resp = await axios.get(`http://localhost:5000/api/jobs/candidateSearch/${savedJob.job}`);
            
      setActive(resp.data);  
      
           
    }   
    anyNameFunction();
   
    
  }, [jobs])
    return (
        <Fragment>
             <div className="post-bar">
                        <div className="p-all saved-post">
                            <div className="usy-dt">
                                <div className="wordpressdevlp">
                                    <h2>Senior Wordpress Developer</h2>
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
                                
                                {!active ?
                                <Fragment><Link className="clrbtn" to="/myprofile" onClick={()=>{addCandidature(job._id)}}>Applied</Link> </Fragment>
                            :
                               <Fragment> <button type="button" className="btn btn-success disabled">Apllied Successfully </button></Fragment>
                            }
                                
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
    { getJobByUser ,setActive ,deleteJob,addCandidature}
  )(AppliedJobDetail);

