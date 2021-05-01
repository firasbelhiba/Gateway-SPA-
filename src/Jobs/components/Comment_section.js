import React,{useState} from 'react'
import { connect } from 'react-redux';
import {addComment} from '../../actions/Job';

import CommentDetail from './CommentDetail'

const Comment_section = ({ job ,auth:{user} ,addComment}) => {

    const [message,setMessage]= useState("")

    const onSub=(e)=>{
        e.preventDefault()
   const newCommment={
        user :user._id,
        text:message,
   }
        addComment(newCommment, job._id,)
        
    }
    
   
    return (

        <div className="posty">
            <div className="comment-section">
                <a href="#" className="plus-ic">
                   
                </a>
                <div className="comment-sec">
                    <ul>  

                        {job.comments.map((comment)=>
                        <CommentDetail comment ={comment} key={comment._id} job={job}/>             
                         )  }        
                        
                    </ul>
                </div>
                <div className="post-comment">
                    <div className="cm_img">
                        <img src={user.avatar} alt="" />
                    </div>
                    <div className="comment_box">
                        <form onSubmit={e=>{onSub(e)}} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}>
                            <input
                                type="text"
                                placeholder="Post a comment"
                                value={message}
                                 onChange={(e)=>setMessage(e.target.value)}
                            />
                            <button type="submit" >Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
 
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { addComment}
)(Comment_section);

