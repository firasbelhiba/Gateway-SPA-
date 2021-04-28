import React, {useEffect} from "react";
import FollowQuestion from "../elements/FollowQuestion";
import {useDispatch, useSelector} from "react-redux";
import {getFollowedQuestion} from "../../../actions/questions";

const FollowedQuestions = () => {
    const dispatch = useDispatch();

    const Questions = useSelector((state) => state.question.questions);
    const user = JSON.parse(localStorage.getItem('user'))._id;

    return (
        <div style={{marginTop: '15px'}}>
            {Questions.map(Question => {
                var follows = [];
                for (var i in Question.following)
                    follows.push(Question.following[i].user);
                if (follows.includes(user))
                    return <FollowQuestion details={Question}/>
            })}
        </div>
    );
}

export default FollowedQuestions;
