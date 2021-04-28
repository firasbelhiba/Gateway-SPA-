import React from "react";
import '../styles/UserQuestion.css';

const AnswerVote = () => {

    return (
        <div
             style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <i id="upVote" className="large fa-chevron-up icon"
               style={{cursor: 'pointer', color: 'gray'}}
               onClick={() => console.log('upvote')}/>
            <div style={{paddingRight: '3px', paddingBottom: '6px', paddingTop: '6px'}}>1000</div>
            <i id="downVote" className="large fa-chevron-down icon"
               style={{cursor: 'pointer', color: 'gray'}}
               onClick={() => console.log('downvote')}/>
        </div>
    );
}

export default AnswerVote;
