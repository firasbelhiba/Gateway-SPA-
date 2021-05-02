import React, {useState} from "react";
import Navigation from "../component/elements/Navigation";
import SideWidget from "../component/widgets/SideWidget";
import SideWidgetFrequentlyAsked from "../component/widgets/SideWidgetFrequentlyAsked"
import FilterItem from "../component/elements/FilterItem";
import QuestionButton from '../component/elements/QuestionButton';
import SortItem from "../component/elements/SortItem";
import RelevantQuestions from "../component/tabs/RelevantQuestions";
import Search from "../component/elements/Search";
import Section from "../component/Section";
import SideMenu from "../component/widgets/SideMenu";
import '../styles/UserQuestion.css';
import '../styles/QuestionSection.css';
import MenuBar from "../component/elements/MenuBar";

const QuestionsSection = () => {
    const [content, setContent] = useState(<RelevantQuestions/>)
    const handleChange = (content) => {
        setContent(content)
    }
    return (
        <section style={{marginTop: '20px'}}>
            <div className="row">
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="sidebar">
                                <SideMenu/>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            {/** <OptionsBar onChange={this.handleChange}/> **/}
                            <MenuBar onChange={handleChange}/>
                            <Section content={content}/>
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

export default QuestionsSection;
