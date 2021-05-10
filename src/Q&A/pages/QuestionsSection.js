import React, {useEffect, useState} from "react";
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
import {connect, useDispatch} from "react-redux";
import {getALLDomains} from "../../actions/questions";

const QuestionsSection = ({getALLDomains, question: {alldomains}}) => {
    const [content, setContent] = useState(<RelevantQuestions/>)
    const dispatch = useDispatch();

    useEffect(() => {
        getALLDomains()
    }, [dispatch]);

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
                                <SideMenu Domains={alldomains}/>
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
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => ({
    question: state.question,
});

export default connect(mapStateToProps, {getALLDomains})(QuestionsSection);
