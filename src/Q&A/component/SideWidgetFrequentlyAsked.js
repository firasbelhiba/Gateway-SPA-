import React from "react";
import Question from "./Question";

class SideWidgetFrequentlyAsked extends React.Component {
    render() {
        return (
            <div className="widget widget-user ui segment">
                <h3 className="title-wd">Frequently Asked</h3>
                <ul className="jobs-list">
                    <a href="#"><Question/></a>
                    <a href="#"><Question/></a>
                    <a href="#"><Question/></a>
                    <a href="#"><Question/></a>
                </ul>
            </div>
        );
    }
}

export default SideWidgetFrequentlyAsked;
