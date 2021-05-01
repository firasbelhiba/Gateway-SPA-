import React, {useEffect, useState} from "react";
import UserQuestion from "../component/UserQuestion";
import SideWidgetBlogs from "../component/widgets/SideWidgetBlogs";
import "../styles/QuestionDetails.css";
import {useLocation} from 'react-router-dom';
import {getQuestionById} from "../../actions/questions";
import {connect, useDispatch, useSelector} from "react-redux";
import {Loading_spinner} from "../../Shared/layouts/Loading_spinner";
import {Divider} from "@material-ui/core";
import {NewAnswer} from "../component/NewAnswer";
import AnswerEditor from "../component/TextEditor/AnswerEditor";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import {sort, sortByVotes} from "../../actions/questions";
import SideWidgetYoutube from "../component/widgets/SideWidgetYoutube";

const initialValue = [{"type": "paragraph", "children": [{"text": ""}]}];

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const QuestionDetails = ({getQuestionById, question: {question, loading}}) => {
    const dispatch = useDispatch();
    const [input, setInput] = useState(initialValue);

    let query = useQuery();
    const id = query.get('id');

    useEffect(() => {
        getQuestionById(id)
    }, [dispatch]);
    const Question = useSelector((state) => state.question.question);


    const sortUp = () => {
        dispatch(sort(id, 'dsc'))
    }
    const sortDown = () => {
        dispatch(sort(id, 'asc'))
    }
    const sortVotes = () => {
        dispatch(sortByVotes(id))
    }

    return loading || question === null ? (
        <Loading_spinner/>
    ) : (
        <div className="row" style={{marginTop: '20px'}}>
            <div className="col-lg-1">
            </div>
            <div className="col-lg-8">
                <div className="ui segment">
                    <UserQuestion details={Question} solved={true}/>
                    <div className="ui dividing header">
                        <div className="container" style={{display: 'flex', justifyContent: 'space-between'}}>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 style={{float: "left"}}>Answers</h1>
                            <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group"
                                         style={{float: "right"}}>
                                <Button onClick={sortUp}>Recent</Button>
                                <Button onClick={sortDown}>Oldest</Button>
                                <Button onClick={sortVotes}>Votes</Button>
                            </ButtonGroup>
                        </div>
                        <div style={{padding: "40px 20px"}}>
                            {Question.answers.map(answer => (
                                <div>
                                    <NewAnswer description={answer.description} replies={answer.replies}
                                               userid={Question.user}
                                               date={answer.date}
                                               solved={Question.solved} solution={answer.solution} idQ={id}
                                               idA={answer._id}
                                               answerUser={answer.user}
                                               UpVote={answer.upVotes}
                                               DownVotes={answer.downVotes}
                                    />
                                    <Divider variant="fullWidth" style={{margin: "30px 0"}}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/*<div className="ui small comments row" style={{margin: '0px', padding: '0px'}}>
                        {Question.answers.map(answer => (
                            <Answer description={answer.description} replies={answer.replies} userid={Question.user}
                                    date={answer.date}
                                    solved={Question.solved} solution={answer.solution} idQ={id} idA={answer._id}
                                    answerUser={answer.user}/>
                        ))}

                    </div>*/}
                    <div className="ui threaded comments">
                        <AnswerEditor Qid={id} value={input} setValue={setInput}/>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <SideWidgetBlogs search={Question.tags}/>
                <SideWidgetYoutube search={Question.subject}/>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    question: state.question,
    auth: state.auth,
    profile: state.profile,
});

export default connect(mapStateToProps, {getQuestionById})(QuestionDetails);
