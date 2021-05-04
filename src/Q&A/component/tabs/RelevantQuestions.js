import React, {useEffect} from "react";
import UserQuestion from "../UserQuestion";
import Navigation from "../elements/Navigation";
import {useDispatch, useSelector} from "react-redux";
import {getQuestion, getSettings, getDomains} from "../../../actions/questions";
import QuestionButton from "../elements/QuestionButton";
import FilterItem from "../elements/FilterItem";
import SortItem from "../elements/SortItem";
import Search from "../elements/Search";
import QuestionsSetting from "../elements/QuestionsSetting";

const RelevantQuestions = () => {
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'))._id;

    useEffect(() => {
        dispatch(getQuestion());
        dispatch(getDomains(user));
    }, [dispatch]);

    const Questions = useSelector((state) => state.question.questions);
    const Domains = useSelector((state) => state.question.domains);

    var domains = [];
    for (var i in Domains)
        domains.push(Domains[i].category.toUpperCase());

    var QuestionsRelevant = [];
    for (var i in Questions)
        if (domains.includes(Questions[i].category.toUpperCase()))
            QuestionsRelevant.push(Questions[i]);

    return (
        <div>
            <div className="row" style={{display: 'flex', justifyContent: 'space-between'}}>
                <QuestionsSetting Domains={Domains}/>
                <QuestionButton user={user}/>
                <FilterItem/>
                <SortItem/>
                <Search/>
            </div>
            <div className="ui segments" style={{border: '0px'}}>
                <div>
                    {QuestionsRelevant.map(question => {
                        var UpVotes = [];
                        for (var i in question.upVotes)
                            UpVotes.push(question.upVotes[i].user);

                        var DownVotes = [];
                        for (var j in question.downVotes)
                            DownVotes.push(question.downVotes[j].user);
                        return (
                            <div>
                                <UserQuestion details={question} upVotes={question.upVotes}
                                              downVotes={question.downVotes}
                                              segment="ui segment"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    );
}

export default RelevantQuestions;
