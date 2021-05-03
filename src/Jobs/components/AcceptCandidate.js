import React,{Fragment,useState,useEffect} from 'react'
import moment from 'moment';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getJobs , setActive,setActiveMail,setCurrentUser ,getJobByUser,applyJob,setCurrent} from '../../actions/Job';
import {getProfileById } from '../../actions/profile';
import PropTypes from 'prop-types';


const AcceptCandidate = ({job,acceptJob,Job:{jobs},profile:{profile},applyJob,getProfileById,setCurrentUser,setActiveMail,setCurrent}) => {
    const [active,setActive]= useState(false)
    const [User,setUser] = useState({});

    useEffect(  () =>  {
        async function anyNameFunction() {
       
            const res = await axios.get(`http://localhost:5000/api/users/${acceptJob.user}`);
        
            setUser(res.data);
             
        }   
        anyNameFunction();
        if (job.appliedTo === undefined){
            setActive(true)
        }else{
            setActive(false)
        }
        console.log(job.appliedTo)
          }
        ,[jobs])
    return (
        <Fragment>
              
                 <div className="post-bar">
                        <div className="post_topbar applied-post">
                            <div className="usy-dt">
                                <img src={User.avatar} width="30%" alt="" />
                                <div className="usy-name">
                                    <h3>{User.name}</h3>
                                    <div className="epi-sec epi2">
                                        <ul className="descp descptab bklink">
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="ed-opts">
                                <a href="#" title="" className="ed-opts-open"
                                ><i className="la la-ellipsis-v"></i></a>
                                <ul className="ed-options">
                                    <li><a href="#" title="">Edit Post</a></li>
                                    <li><a href="#" title="">Accept</a></li>
                                    <li><a href="#" title="">Unbid</a></li>
                                    <li><a href="#" title="">Close</a></li>
                                    <li><a href="#" title="">Hide</a></li>
                                </ul>
                            </div>
                            <div className="job_descp noborder">
                                <div className="star-descp review profilecnd">
                                    <ul className="bklik">
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star"></i></li>
                                        <li><i className="fa fa-star-half-o"></i></li>
                                        <a href="#" title="">5.0 of 5 Reviews</a>
                                    </ul>
                                </div>
                                <div className="devepbtn appliedinfo noreply">
                                    {active ?<Fragment>
                                        <Link className="clrbtn" to="myprofile" onClick={()=>{applyJob(job._id)}}>Accept</Link>
                                    </Fragment>
                                    :<Fragment>
                                        <Fragment> <button type="button" className="btn btn-success disabled">Accepted </button></Fragment>
                                    </Fragment>}
                                    
                                    <Link to={`/profileby?id=${acceptJob.user}`} onClick={() => {
                                            getProfileById(acceptJob.user);
                                             localStorage.setItem('this_profile', JSON.stringify(profile));

                                        }} title="" className="view-more-pro">View Profile</Link>
                                    {console.log(job.appliedTo)}
                                    <a className="clrbtn" href="#">Message</a>
                                    <Link className="clrbtn" to="/myprofile"  onClick={()=>{setCurrent(job);setActiveMail();setCurrentUser(User)}}>add interview</Link>
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
    profile :state.profile,
  });
  
  export default connect(
    mapStateToProps,
    { getJobByUser ,setActive,applyJob,getProfileById,setCurrentUser,setActiveMail,setCurrent }
  )(AcceptCandidate);




