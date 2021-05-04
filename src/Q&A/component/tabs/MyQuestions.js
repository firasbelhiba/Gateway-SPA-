import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getQuestion} from "../../../actions/questions";
import UserQuestion from "../UserQuestion";
import QuestionsSetting from "../elements/QuestionsSetting";
import QuestionButton from "../elements/QuestionButton";
import FilterItem from "../elements/FilterItem";
import SortItem from "../elements/SortItem";
import Search from "../elements/Search";

const MyQuestions = () => {
    const dispatchQuestion = useDispatch();

    useEffect(() => {
        dispatchQuestion(getQuestion());
    }, [dispatchQuestion]);
    const Questions = useSelector((state) => state.question.questions);
    const user = JSON.parse(localStorage.getItem('user'))._id;

    return (
        <div>
            <div className="row" style={{display: 'flex', justifyContent: 'space-between'}}>
                <QuestionButton/>
                <FilterItem/>
                <SortItem/>
                <Search/>
            </div>
            <div className="ui segments" style={{border: '0px'}}>
                <div>
                    {Questions.filter(question => question.user === user).map(filteredQuestion => (
                        <UserQuestion details={filteredQuestion} segment="ui segment"/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyQuestions;
