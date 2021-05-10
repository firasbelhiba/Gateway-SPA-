import React, {useEffect} from "react";
import UserQuestion from "../UserQuestion";
import Navigation from "../elements/Navigation";
import {useDispatch, useSelector} from "react-redux";
import {getQuestion} from "../../../actions/questions";
import QuestionButton from "../elements/QuestionButton";
import FilterItem from "../elements/FilterItem";
import SortItem from "../elements/SortItem";
import Search from "../elements/Search";

const Popular = () => {
    const dispatchQuestion = useDispatch();

    useEffect(() => {
        dispatchQuestion(getQuestion());
    }, [dispatchQuestion]);

    const Questions = useSelector((state) => state.question.questions);

    return (
        <div>
            <div className="ui segments" style={{border: '0px'}}>
                <div>
                    {Questions.sort((a, b) => parseInt(b.views) - parseInt(a.views)).map(question => {
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

export default Popular;
