import React,{Fragment,useEffect,useState} from 'react'
import { connect } from 'react-redux';
import { deleteJob, setCurrent,addLike,setActive,saveJob,setHide,addViews, getJobs,setActiveReport,setDisactiveReport, setActiveMail} from '../../actions/Job';
import {loadUser} from '../../actions/auth';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from "react-router-dom";
import Comment_section from './Comment_section'
import Moment from "react-moment";
import moment from 'moment'
import Report_Form from '../../Forum/components/Form/Report_Form';


const Job = ({ job, addLike ,auth:{user},deleteJob, setCurrent,setActive,saveJob,addViews,setActiveReport,setActiveMail,setHide,Job:{ error , jobs  } }) => {

const [User,setUser] = useState({});
const [total,setTotal] = useState({});
const [readMore,setReadMore]=useState(false);
const [activate,setActivate]=useState("passive");
const [activate3,setActivate3]=useState("");
const [saved,setSaved]=useState(false);
const [comment,setComment]=useState(false);
const [word,setWord]=useState('')

  const extraContent=<div>
      <p className="extra-content">
        {job.description}
      </p>
  </div>
  const lessContent=<div>
  <p className="lessContent" > 
    
   {word}
  </p>
  </div>

  const linkName=readMore?'Read Less << ':'Read More >> '


  useEffect(  () =>  {
    async function anyNameFunction() {

      const res = await axios.get(`http://localhost:5000/api/users/${job.user}`);
        
        setUser(res.data);
        
       
      const response = await axios.get(`http://localhost:5000/api/jobs/Details/jobs/${job._id}`);
        
        setTotal(response.data);
       
        const resp = await axios.get(`http://localhost:5000/api/jobs/savedSearch/${job._id}`);
        
        setSaved(resp.data);
       
        getJobs()
        
         
    }   
    anyNameFunction();
    {job.likes.filter((like)=>like.user.toString() === user._id).length > 0  && setActivate("active")}
      
    var str="";
     var c = job.description.split(" ")
   for (let i = 0; i < job.description.split(" ").length/2; i++) {
    str = str +" "+ c[i];
  }
  setWord(str)
    console.log(saved);
    console.log(total);
      }
    ,[jobs])

 const setLike=(e)=>{
  e.preventDefault();
  addLike(job._id);
  async function anyNameFunction() {
    const res = await axios.get(`http://localhost:5000/api/users/${job.user}`); 
      setUser(res.data); 
    const response = await axios.get(`http://localhost:5000/api/jobs//Details/jobs/${job._id}`);    
      setTotal(response.data);
        }   
  anyNameFunction();
  if(activate ==="passive"){
    setActivate("active");
  }else{
   setActivate("passive")
   console.log(total);
   }  }

   const setViews=()=>{
    
    setReadMore(!readMore);
    if(job.views.filter((view)=>view.user.toString() === user._id).length === 0 && user._id !== job.user){
    addViews(job._id);
    async function anyNameFunction() {
      const res = await axios.get(`http://localhost:5000/api/users/${job.user}`); 
        setUser(res.data); 
      const response = await axios.get(`http://localhost:5000/api/jobs//Details/jobs/${job._id}`);    
        setTotal(response.data);
          }   
    anyNameFunction();
  }
      }

 const setAct=()=>{
   if(activate3 ===""){
    setActivate3("active");
   }else{
     setActivate3("");
   }
  
 }
 const Update=()=>{
   setCurrent(job);
   setActive();
   setActivate3('');
 }
 const Report=()=>{
  setCurrent(job);
  setActiveReport();
  setActivate3('');
}
const Mail=()=>{
  setCurrent(job);
  setActiveMail();
  setActivate3('');
}
 const save=(e)=>{

  e.preventDefault();

  saveJob(job._id);
  
  if(saved===true){
    setSaved(false);
  }else{
    setSaved(true);
  }
  setActivate3('');
 }
 const commenter=(e)=>{
   e.preventDefault();
   if(comment){
     setComment(false);
   }else{
     setComment(true)
   }

 }
    
    return (
        <Fragment>
            <div className="post-bar">
                            <div className="post_topbar">
                              <div className="usy-dt">
                                <img src={User.avatar} alt="" width="50"/>
                                <div className="usy-name">
                                 <h3>{User.name}</h3>
                                  <span><img src="assets/images/clock.png" alt="" />{moment(job.date).fromNow()}</span>
                                </div>
                              </div>
                              <div className="ed-opts">
                                <Link to="/jobs" title className="ed-opts-open" onClick={()=>{setAct()}}><i className="la la-ellipsis-v" /></Link>
                                <ul className={`ed-options ${activate3}`} >
                                  {user._id === job.user ?<Fragment>
                                   <li><Link to="/jobs"  onClick={() =>Update() } title>Edit Post</Link></li></Fragment>
                                   :<Fragment>{saved ? <Fragment><li><Link to="/jobs" title onClick={(e)=>{save(e)}}>Unsaved</Link></li></Fragment>: <Fragment></Fragment>}
                                   <li><Link to="/jobs"  title onClick={()=>Report()}>Report</Link></li>
                                   </Fragment> }
                                   
                                      
                                  <li><Link to="/jobs"  title onClick={(e)=>{e.preventDefault();setHide(job._id)}}>Hide</Link></li>
                                </ul>
                              </div>
                            </div>
                            <div className="epi-sec">
                              <ul className="descp">
                                <li><img src="assets/images/icon8.png" alt="" /><span>Epic Coder</span></li>
                                <li><img src="assets/images/icon9.png" alt="" /><span>{job.location}</span></li>
                              </ul>
                              <ul className="bk-links">
                              {user._id !== job.user ?<Fragment>
                                {!saved ? <Fragment><li><Link to="/jobs" title onClick={(e)=>{save(e)}}><i className="la la-bookmark" /></Link></li></Fragment>: <Fragment></Fragment>}
                                
                                <li><Link to="/jobs"  title onClick={()=>Mail()}><i className="la la-envelope" /></Link></li>
                                   </Fragment>:<Fragment></Fragment>}
                               
                              </ul>
                            </div>
                            <div className="job_descp">
                              <h3>{job.title}</h3>
                              <ul className="job-dt">
                                <li><a href="#" title>{job.availability}</a></li>
                                <li><span>${job.price}/ hr</span></li>
                              </ul>
                             <p> <a className="read-more-link" onClick={()=>{setViews()}}>
                                {readMore ? extraContent:lessContent}<h2>{linkName}</h2></a>    
                                </p>
                              <ul className="skill-tags">
                               {job.skills.length>0 && job.skills.map((skill) => {
                                 return <li><a href="#" title>{skill}</a></li>
                                })}
                              
                                
                              </ul>
                            </div>
                            <div className="job-status-bar">
                              <ul className="like-com">
                                <li>
                                  
                                  <Link to="/jobs"  className={activate} onClick={(e)=>{setLike(e)}}><i className="fas fa-heart" /> Like</Link>
                                  <img src="assets/images/liked-img.png" alt="" />
                                  <span>{total.totalLikes}</span>
                                 
                                </li>
                                <li><Link to="/jobs" className="com" onClick={(e)=>{commenter(e)}}><i className="fas fa-comment-alt" /> Comments {total.totalComments}</Link></li>
                   
                              </ul>
                              <a href="#"><i className="fas fa-eye" />Views {total.totalViews}</a>
                            </div>
                            {comment&& <Comment_section job={job} />}
                            
                          </div>
                          
        </Fragment>
    )
}
Job.propTypes = {
  Job: PropTypes.object.isRequired,
  deleteJob: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
  
};

const mapStateToProps = state => ({
  Job: state.Job,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { deleteJob, setCurrent, addLike ,setActive,saveJob,setHide,addViews,loadUser,setActiveReport,setActiveMail}
)(Job);


