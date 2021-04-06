import React from "react";
import FollowQuestion from "../elements/FollowQuestion";

class FollowedQuestions extends React.Component {

    render() {

        return (
            <div style={{marginTop: '15px'}}>
                <FollowQuestion/>
                <FollowQuestion/>
                <FollowQuestion/>
                <FollowQuestion/>
                <FollowQuestion/>
            </div>
        );
    }
}

export default FollowedQuestions;
