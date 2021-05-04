import React,{Fragment,useEffect,useState} from 'react'
import axios from 'axios';

const MostViewedJobDetail = ({ViewedJob}) => {
  const [job, setJob] = useState({})
  const [word,setWord]=useState('')

  useEffect(() => {
   
    async function anyNameFunction() {

      const res = await axios.get(`http://localhost:5000/api/jobs/${ViewedJob._id}`);
        
      setJob(res.data);
           
    }   
    anyNameFunction();
    
    if (Object.keys(job).length !== 0) {
      var str="";
     var c = job.description.split(" ")
   for (let i = 0; i < job.description.split(" ").length/2; i++) {
    str = str +" "+ c[i];
  }
  setWord(str)
    }
  }, [job])

 
    return (
      <Fragment>
              <div className="job-info">
                 <div className="job-details">
                      <h3>{job.title}</h3>
                          <p>{word} ...</p>
                </div>
                <div className="hr-rate">
                    <span>${job.price}/hr</span>
                 </div>
               </div>
     
</Fragment>
    )
}
export default MostViewedJobDetail
