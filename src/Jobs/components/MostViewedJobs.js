import React,{Fragment,useEffect,useState} from 'react'
import MostViewedJobDetail  from './MostViewedJobDetail'
import axios from 'axios';
import { connect } from 'react-redux';

 const MostViewedJobs = ({Job:{jobs}}) => {
   const [ViewedJobs, setViewedJobs] = useState([])

  useEffect(() => {
    async function anyNameFunction() {

      const res = await axios.get("http://localhost:5000/api/jobs/Most/Viewed");
        
      setViewedJobs(res.data);
           
    }   
    anyNameFunction();
    
  }, [jobs])

    return (
        <Fragment>
         <div className="widget widget-jobs ">
                          <div className="sd-title" >
                            <h3>Most Viewed Jobs</h3>
                            <i className="la la-ellipsis-v " />
                          </div>
                          <div className="jobs-list">

                            {ViewedJobs.map((ViewedJob)=> <MostViewedJobDetail ViewedJob={ViewedJob}  key={ViewedJob._id}/>)}
                              
                          </div>
                        </div>   
        </Fragment>
    )
}
const mapStateToProps = state => ({
  Job: state.Job,
  
});

export default connect(
  mapStateToProps,
  { }
)(MostViewedJobs);

