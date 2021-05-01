import React,{Fragment,useEffect,useState} from 'react'
import TopJobDetail  from '../components/TopJobDetail'
import axios from 'axios';
import { connect } from 'react-redux';

 const TopJobs = ({Job:{jobs}}) => {
   const [topJobs, setTopJobs] = useState([])

  useEffect(() => {
    async function anyNameFunction() {

      const res = await axios.get("http://localhost:5000/api/jobs/top/jobs");
        
      setTopJobs(res.data);
           
    }   
    anyNameFunction();
    
  }, [jobs])

    return (
        <Fragment>
         <div className="widget widget-jobs ">
                          <div className="sd-title" >
                            <h3>Top Jobs</h3>
                            <i className="la la-ellipsis-v " />
                          </div>
                          <div className="jobs-list">

                            {topJobs.map((TopJob)=> <TopJobDetail TopJob={TopJob}  key={TopJob._id}/>)}
                              
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
)(TopJobs);

