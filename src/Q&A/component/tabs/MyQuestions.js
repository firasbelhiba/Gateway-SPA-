import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getQuestion} from "../../../actions/questions";
import UserQuestion from "../UserQuestion";

const MyQuestions = () => {
    const dispatchQuestion = useDispatch();

    useEffect(() => {
        dispatchQuestion(getQuestion());
    }, [dispatchQuestion]);
    const Questions = useSelector((state) => state.question.questions);
    const user = JSON.parse(localStorage.getItem('user'))._id;

    return (
        <div className="ui segments" style={{border: '0px'}}>
            <div>
                {Questions.filter(question => question.user === user).map(filteredQuestion => (
                    <UserQuestion details={filteredQuestion} segment="ui segment"/>
                ))}
            </div>
        </div>
    );
}

export default MyQuestions;
