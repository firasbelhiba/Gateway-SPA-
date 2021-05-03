import React from "react";
import SideWidget from "../component/widgets/SideWidget";
import SideWidgetFrequentlyAsked from "../component/widgets/SideWidgetFrequentlyAsked"
import SideMenu from "../component/widgets/SideMenu";
import '../styles/UserQuestion.css';
import '../styles/QuestionSection.css';
import All from "../component/tabs/All";
import Popular from "../component/tabs/Popular";

const PopularQuestions = () => {
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
                            <Popular/>
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

export default PopularQuestions;
