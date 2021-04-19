import React, {useEffect} from "react";
import UserQuestion from "../component/UserQuestion";
import SideWidget from "../component/widgets/SideWidget";
import SideWidgetFrequentlyAsked from "../component/widgets/SideWidgetFrequentlyAsked";
import Answer from "../component/Answer";
import "../styles/QuestionDetails.css";
import {useLocation} from 'react-router-dom';
import {getQuestionById} from "../../actions/questions";
import {connect, useDispatch, useSelector} from "react-redux";
import {Loading_spinner} from "../../Shared/layouts/Loading_spinner";
import {addComment, getPost} from "../../actions/post";


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const QuestionDetails = ({getQuestionById, question: {question, loading}}) => {

    let query = useQuery();
    console.log(query.get('id'));
    const dispatch = useDispatch();

    useEffect(() => {
        getQuestionById(query.get('id'))
    }, [dispatch]);
    const Question = useSelector((state) => state.question.question);

    console.log(Question);

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
                    <div className="ui small comments row" style={{margin: '0px', padding: '0px'}}>
                        <div className="ui green message">
                            <Answer/>
                        </div>
                        <Answer/>
                        <Answer/>
                        <Answer/>
                    </div>
                    <div className="ui threaded comments">
                        <form className="ui reply form">
                            <div className="field">
                                <textarea/>
                            </div>
                            <div className="ui blue labeled submit icon button">
                                <i className="icon edit"/> Add Reply
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <SideWidget/>
                <SideWidgetFrequentlyAsked/>
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
