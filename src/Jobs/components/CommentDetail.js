import React,{Fragment,useEffect,useState} from 'react'
import { connect } from 'react-redux';
import { deleteComment} from '../../actions/Job';
import axios from 'axios';
import { Link } from "react-router-dom";

import moment from 'moment'


const CommentDetail = ({ job,comment,deleteComment,auth:{user},Job:{jobs} }) => {

    
    const [User,setUser] = useState({})
    
 useEffect(() => {
     console.log(jobs)
    async function anyNameFunction() {

        const res = await axios.get(`http://localhost:5000/api/users/${comment.user}`);     
          setUser(res.data);  
           
      }   
      anyNameFunction();
      

 },[jobs])

 


    return (
                        <Fragment>
        
                             <li>
                             <div className="comment-list">
                          
                             <div className="cm_img">
                        <img src={User.avatar} alt="" />
                    </div>
                                 <div className="comment">
                                     <h3>{User.name}</h3>
                                     <span
                                     ><img src="assets/images/clock.png" alt="" /> {moment(comment.date).fromNow()}</span
                                     >
                                     <p>
                                        {comment.text}

                                     </p>
                                       {user._id===User._id &&
                                       <Link to="/jobs" title="" onClick={(e)=> {e.preventDefault() ; deleteComment(job._id,comment._id)}}
                                      
                                       ><i className="fa fa-reply-all"></i>delete</Link
                                       >}   
                                       {console.log(job._id)}
                                       {console.log(comment._id)}
                                 </div>
                             </div>
                         </li>
                         
                         </Fragment>
                        
    )
}

const mapStateToProps = state => ({
 
 auth: state.auth,
 Job: state.Job,
});

export default connect(
    mapStateToProps,
  { deleteComment}
)(CommentDetail);

