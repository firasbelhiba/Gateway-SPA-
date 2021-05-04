import React,{Fragment,useState, useMemo,useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDisactiveMail,addJob,getJobs, updateJob ,clearCurrent,addMail} from '../../actions/Job';
import axios from 'axios';
import { toast } from "react-toastify";

const MailForm = ({Job:{activeMail,current,active},auth:{user}, setDisactiveMail ,clearCurrent ,addMail}) => {
    const [to, setTo] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [User, setUser] = useState({});
    useEffect(() => {

        
          
        
        if(current) {
            setTo('');
            setMessage('');
            setSubject('');
            async function anyNameFunction() {

                const res = await axios.get(`http://localhost:5000/api/users/${current.user}`);     
                  setUser(res.data);  
                   
              }   
              anyNameFunction();
        }  
     
            
         },[current])

    const onSub=(e)=>{
        e.preventDefault()
        if (message === "" && subject === "" && User === null) {
          toast.error("Fill the fields and save !", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
        } else if (message === "") {
          toast.error("message is required !", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
        } else if (subject === "") {
          toast.error("subject is required !", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
        } else if (User === "") {
          toast.error("User is required !", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
        } else {
       if(current){
          const newMail={
              
              subject,
              to:User.email,
              message
         }
         addMail(newMail, current._id,)
              
          }
       
        clearCurrent()
        setDisactiveMail();
        toast.success("Mail is sent !", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
       
      }
    }
    return (
        <Fragment>
    <div className={`post-popup job_post ${activeMail}`} >
        <div className="post-project">
          <h3>Send Email</h3>
          <div className="post-project-fields">
            <form onSubmit={e=>{onSub(e)}} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}>
              <div className="row">
                
                <div className="col-lg-12">
                  <input type="text" name="title" value={User.email}  placeholder="To" />
                </div>

                <div className="col-lg-12">
                  <input type="text" name="title" value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder="Subject" />
                </div>

                <div className="col-lg-12">
                  <textarea name="description" placeholder="Message"  value={message} onChange={(e)=>setMessage(e.target.value)} />
                </div>
                <div className="col-lg-12">
                  <ul>
                    <li><button type="submit">Send</button></li>
                    <li><Link to="/jobs" onClick={()=>{setDisactiveMail();clearCurrent();}} title>Cancel</Link></li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <Link to="/jobs" onClick={()=>{setDisactiveMail();clearCurrent();}} title><i className="la la-times-circle-o" /></Link>
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
    { setDisactiveMail , addJob,getJobs ,updateJob,clearCurrent,addMail}
  )(MailForm);


