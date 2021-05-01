import React,{Fragment,useEffect,useState} from 'react'
import axios from 'axios';

const MostViewedJobDetail = ({ViewedJob}) => {
  const [job, setJob] = useState({})

  useEffect(() => {
   
    async function anyNameFunction() {

      const res = await axios.get(`http://localhost:5000/api/jobs/${ViewedJob._id}`);
        
      setJob(res.data);
           
    }   
    anyNameFunction();

  }, [])
    return (
      <Fragment>
              <div className="job-info">
                 <div className="job-details">
                      <h3>{job.title}</h3>
                          <p>{job.description}</p>
                </div>
                <div className="hr-rate">
                    <span>${job.price}/hr</span>
                 </div>
               </div>
     
</Fragment>
    )
}
export default MostViewedJobDetail
