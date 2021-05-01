import React, { Fragment ,useEffect} from 'react';
import Job  from './Job';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJobs , setActive } from '../../actions/Job';
import PropTypes from 'prop-types';
import { JobForm } from '../froms/JobForm';


 const JobPosts = ({ Job: { jobs, loading },auth:{user:{avatar}}, getJobs,setActive }) => {

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
    
  },[]);

  

  
  return (
    <Fragment>
      <div className="col-lg-6">
        <div className="main-ws-sec">
          <div className="post-topbar">
            <div className="user-picy">
              <img src={avatar} alt="" />
            </div>
            <div className="post-st">
              <ul>
                
                <li>
                  <Link className="post-jb active" to="/jobs" title="" onClick={()=>{setActive()}}>
                    Add Job
                           </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="posts-section">
          {!loading && jobs.length === 0 ? (
        <p className='center'>No jobs to show...</p>
      ) : (
        jobs.map((job) => <Job job={job} key={job._id} />)
      )}
            
           
          </div>
        </div>
      </div>
      
    </Fragment>
  )
}

JobPosts.propTypes = {
  Job: PropTypes.object.isRequired,
  getJobs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  Job: state.Job,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { getJobs ,setActive }
)(JobPosts);


