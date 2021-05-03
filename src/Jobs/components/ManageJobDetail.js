import React,{Fragment,useState,useEffect} from 'react'
import moment from 'moment';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJobs , setActive ,getJobByUser,deleteJob,setCurrent} from '../../actions/Job';
import PropTypes from 'prop-types';

const ManageJobDetail = ({job,Job:{jobs,active},deleteJob,setCurrent,setActive}) => {

    const [total,setTotal] = useState({});

    useEffect(  () =>  {
        async function anyNameFunction() {
       
          const response = await axios.get(`http://localhost:5000/api/jobs/Details/jobs/${job._id}`);
            
            setTotal(response.data);   
             
        }   
        anyNameFunction();
        
          }
        ,[])
    return (
        <Fragment>
               <div className="posts-bar">
                        <div className="post-bar bgclr">
                            <div className="wordpressdevlp">
                                <h2>{job.title}</h2>
                                <p>
                                    <i className="la la-clock-o"></i>Posted on {moment(job.date).fromNow()}
                                                                    </p>
                            </div>
                            <br />
                            <div className="row no-gutters">
                                <div className="col-md-6 col-sm-12">
                                    <div className="cadidatesbtn">
                                        <button type="button" className="btn btn-primary">
                                            <span className="badge badge-light">{total.totalcandidates}</span 
                                            >Candidates 
                                                                            </button>
                                        <Link to="/myprofile" onClick={()=>{setCurrent(job);setActive()}}>
                                            <i className="far fa-edit"></i>
                                        </Link>
                                        {console.log(active)}
                                        <Link to="/myprofile" onClick={()=>{deleteJob(job._id)}}>
                                            <i className="far fa-trash-alt"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <ul className="bk-links bklink">
                                        <li>
                                            <a href="#" title=""
                                            >
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title=""
                                            >
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
    { getJobByUser ,setActive ,deleteJob,setCurrent}
  )(ManageJobDetail);



