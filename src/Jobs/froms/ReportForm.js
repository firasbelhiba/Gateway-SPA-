import React,{Fragment,useState, useMemo,useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDisactiveReport,addJob,getJobs, updateJob ,clearCurrent,addReport} from '../../actions/Job';
import { toast } from "react-toastify";

 const ReportForm = ({Job:{activeReport,current},auth:{user}, setDisactiveReport ,clearCurrent ,addReport}) => {
 
    const [reason, setReason] = useState('');

    useEffect(() => {
        
       if(current) {
        setReason('')
       }  
    
           
        },[current])
    const onSub=(e)=>{
      e.preventDefault()
      if (reason === "" ) {
        toast.error("reason is required !", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }  else {
     
     if(current){
        const newReport={
            user :user._id,
            reason:reason,
       }
       addReport(newReport, current._id,)
            
        }
     
      clearCurrent()
      setDisactiveReport();
     
      toast.success("Report is sent !", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
    }
 return (
   <Fragment>
    <div className={`post-popup job_post ${activeReport}`} >
        <div className="post-project">
          <h3>Report a job</h3>
          <div className="post-project-fields">
            <form onSubmit={e=>{onSub(e)}} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}>
              <div className="row">
              <fieldset>
              <legend>Why do you want to report?</legend>
              <label className="mt-5" htmlFor="name">
                Reason
              </label>
              <textarea
                rows="10"
                cols="50"
                className="input"
                type="text"
                id="reason"
                placeholder="Reason"
                name="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
              <small className="form-text">Precise the reason</small>
            </fieldset>  
                <div className="col-lg-12">
                  <ul>
                    <li><button type="submit">Post</button></li>
                    <li><Link to="/jobs" onClick={()=>{setDisactiveReport();clearCurrent();}} title>Cancel</Link></li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <Link to="/jobs" onClick={()=>{setDisactiveReport();clearCurrent();}} title><i className="la la-times-circle-o" /></Link>
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
  { setDisactiveReport , addJob,getJobs ,updateJob,clearCurrent,addReport}
)(ReportForm);