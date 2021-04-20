import React, {useEffect} from "react";
import UserQuestion from "../UserQuestion";
import Navigation from "../elements/Navigation";
import {useDispatch, useSelector} from "react-redux";
import {getQuestion} from "../../../actions/questions";

const RelevantQuestions = () => {
    const dispatchQuestion = useDispatch();

    useEffect(() => {
        dispatchQuestion(getQuestion());
    }, [dispatchQuestion]);

    const Questions = useSelector((state) => state.question.questions);

    console.log(Questions);
    return (
        <div className="ui segments" style={{border: '0px'}}>
            <div>
                {Questions.map(question => (
                    <UserQuestion details={question} segment="ui segment"/>
                ))}
            </div>
        </div>
    );
}

export default RelevantQuestions;
