import React from "react";
import faker from "faker"
import UserQuestion from "../component/UserQuestion";
import SideWidget from "../component/SideWidget";
import SideWidgetFrequentlyAsked from "../component/SideWidgetFrequentlyAsked";
import Answer from "../component/Answer";
import "../styles/QuestionDetails.css"

class QuestionDetails extends React.Component {
    render() {
        return (
            <div className="row" style={{marginTop: '50px'}}>
                <div className="col-lg-9">
                    <div className="ui segment">
                        <UserQuestion solved={true}/>
                        <h3 className="ui dividing header">Answers</h3>
                        <div className="ui small comments row">
                            <Answer/>
                            <Answer/>
                            <Answer/>
                            <Answer/>
                        </div>
                        <div className="ui threaded comments">
                            <form className="ui reply form">
                                <div className="field">
                                    <textarea></textarea>
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
}

export default QuestionDetails;
