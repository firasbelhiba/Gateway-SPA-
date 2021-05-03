import React,{Fragment,useState, useMemo,useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDisactiveMail,addJob,getJobs, updateJob ,clearCurrent,addInterview,clearCurrentUser} from '../../actions/Job';
import axios from 'axios';
import DateTimePicker from 'react-datetime-picker';


const InterviewForm = ({Job:{activeMail,current,currentUser,active},auth:{user}, setDisactiveMail ,clearCurrent ,addInterview,clearCurrentUser}) => {
    
    const [subject, setSubject] = useState('');
    const [date, setDate] = useState('');
    const [room, setRoom] = useState('');
    
    useEffect(() => {

        
          
        
        if(!currentUser) {
            
            setSubject('');
            setDate('');
            setRoom('');

        }  
     
            
         },[currentUser])

    const onSub=(e)=>{
        e.preventDefault()
       
       if(current){
          const newMail={
              
              subject,
              to:currentUser.email,
              date,
              room
              
         }
         addInterview(newMail, current._id,)
              
          }
       
        clearCurrent()
        setDisactiveMail();
       
       
      }

    return (
        <Fragment>
    <div className={`post-popup job_post ${activeMail}`} >
        <div className="post-project">
          <h3>Send Email</h3>
          <div className="post-project-fields">
            <form onSubmit={e=>{onSub(e)}} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}>
              <div className="row">
                
                {currentUser ? <div className="col-lg-12">
                  <input type="text" name="title" value={currentUser.email}  placeholder="To" />
                 
                </div>:<div></div>}
                
                <div className="col-lg-12">
                  <input type="text" name="title" value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder="Subject" />
                </div>

                <div className="col-lg-12">
                  <input type="number" name="title" value={room} onChange={(e)=>setRoom(e.target.value)} placeholder="Room" />
                </div>

                <div className="col-lg-12" style={{textAlign:"center"}}>
                <DateTimePicker
                                       onChange={(e)=>{setDate(e)}}
                                        value={date}
                                                       />
                     
                </div>
                
               
                <div className="col-lg-12">
                  <ul>
                    <li><button type="submit">Send</button></li>
                    <li><Link to="/myprofile" onClick={()=>{setDisactiveMail();clearCurrent();clearCurrentUser()}} title>Cancel</Link></li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <Link to="/myprofile" onClick={()=>{setDisactiveMail();clearCurrent();clearCurrentUser()}} title><i className="la la-times-circle-o" /></Link>
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
    { setDisactiveMail , addJob,getJobs ,updateJob,clearCurrent,addInterview,clearCurrentUser}
  )(InterviewForm);
