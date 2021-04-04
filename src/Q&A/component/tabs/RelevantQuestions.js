import React from "react";
import UserQuestion from "../UserQuestion";
import Navigation from "../elements/Navigation";

class RelevantQuestions extends React.Component {

    render() {
        return (
            <div className="ui segments" style={{border: '0px'}}>
                <UserQuestion solved={true} segment="ui segment"/>
                <UserQuestion solved={false} segment="ui segment"/>
                <UserQuestion solved={false} segment="ui segment"/>
                <UserQuestion solved={true} segment="ui segment"/>
                <UserQuestion solved={false} segment="ui segment"/>
                <UserQuestion solved={false} segment="ui segment"/>
            </div>
        );
    }
}

export default RelevantQuestions;
