import React, {useEffect} from "react";
import SideWidget from "../component/widgets/SideWidget";
import SideWidgetFrequentlyAsked from "../component/widgets/SideWidgetFrequentlyAsked"
import SideMenu from "../component/widgets/SideMenu";
import '../styles/UserQuestion.css';
import '../styles/QuestionSection.css';
import All from "../component/tabs/All";
import Popular from "../component/tabs/Popular";
import {connect, useDispatch} from "react-redux";
import {getALLDomains} from "../../actions/questions";

const PopularQuestions = ({getALLDomains, question: {alldomains}}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        getALLDomains()
    }, [dispatch]);

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
                            <Popular/>
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

export default connect(mapStateToProps, {getALLDomains})(PopularQuestions);
