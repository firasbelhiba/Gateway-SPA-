import React from "react";
import UserQuestion from "../component/UserQuestion";
import Navigation from "../component/elements/Navigation";
import SideWidget from "../component/widgets/SideWidget";
import SideWidgetFrequentlyAsked from "../component/widgets/SideWidgetFrequentlyAsked"
import FilterItem from "../component/elements/FilterItem";
import OptionsBar from "../component/elements/OptionsBar";
import QuestionButton from '../component/elements/QuestionButton';
import SortItem from "../component/elements/SortItem";
import RelevantQuestions from "../component/tabs/RelevantQuestions";
import Search from "../component/elements/Search";
import Section from "../component/Section";

class QuestionsSection extends React.Component {
    state = {content: <RelevantQuestions/>}
    handleChange = (content) =>{
        this.setState({content: content});
        console.log(content);
    }
    render() {
        return (
            <section className="forum-page">
                <div className="container">
                    <div className="forum-questions-sec">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row" style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <OptionsBar onChange={this.handleChange}/>
                                    <QuestionButton/>
                                    <FilterItem/>
                                    <SortItem/>
                                    <Search/>
                                </div>
                                <Section content={this.state.content}/>
                                <Navigation/>
                            </div>
                            <div className="col-lg-4">
                                <SideWidget/>
                                <SideWidgetFrequentlyAsked/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default QuestionsSection;
