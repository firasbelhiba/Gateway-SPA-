import React from "react";
import FollowedQuestions from "../component/tabs/FollowedQuestions";
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
import SideMenu from "../component/widgets/SideMenu";
import {Sticky,} from 'semantic-ui-react'
import '../styles/UserQuestion.css';
class QuestionsSection extends React.Component {
    state = {content: <RelevantQuestions/>}
    handleChange = (content) => {
        this.setState({content: content});
        console.log(content);
    }

    render() {
        return (
            <section className="forum-page">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-3">
                                <SideMenu/>
                            </div>
                            <div className="col-lg-9">
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
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <SideWidget/>
                        <SideWidgetFrequentlyAsked/>
                    </div>
                </div>
            </section>
        );
    }
}

export default QuestionsSection;
