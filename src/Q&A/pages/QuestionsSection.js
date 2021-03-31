import React from "react";
import UserQuestion from "../component/UserQuestion";
import Navigation from "../component/Navigation";
import SideWidget from "../component/SideWidget";
import SideWidgetFrequentlyAsked from "../component/SideWidgetFrequentlyAsked"
import FilterItem from "../component/FilterItem";
import OptionsBar from "../component/OptionsBar";
import QuestionButton from '../component/QuestionButton';
import SortItem from "../component/SortItem";

class QuestionsSection extends React.Component {

    render() {
        return (
            <section className="forum-page">
                <div className="container">
                    <div className="forum-questions-sec">
                        <div className="row">
                            <div className="col-lg-8">
                                <OptionsBar/>
                                <QuestionButton/>
                                <FilterItem/>
                                <SortItem/>
                                <div className="ui action input">
                                    <input type="text" placeholder="Search..."/>
                                    <button className="ui icon button">
                                        <i className="search icon"></i>
                                    </button>
                                </div>
                                <div className="ui segments">
                                    <div className="usr-question ui segment">
                                        <UserQuestion solved={true}/>
                                    </div>
                                    <div className="usr-question ui segment">
                                        <UserQuestion solved={false}/>
                                    </div>
                                    <div className="usr-question ui segment">
                                        <UserQuestion solved={false}/>
                                    </div>
                                    <div className="usr-question ui segment">
                                        <UserQuestion solved={true}/>
                                    </div>
                                    <div className="usr-question ui segment">
                                        <UserQuestion solved={false}/>
                                    </div>
                                    <div className="usr-question ui segment">
                                        <UserQuestion solved={false}/>
                                    </div>

                                </div>
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
