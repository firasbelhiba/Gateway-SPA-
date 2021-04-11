import React from "react";
import FollowQuestion from "../elements/FollowQuestion";

class FollowedQuestions extends React.Component {

    render() {

        return (
            <div style={{marginTop: '15px'}}>
                <FollowQuestion solved={false}/>
                <FollowQuestion solved={false}/>
                <FollowQuestion solved={true}/>
                <FollowQuestion solved={true}/>
                <FollowQuestion solved={false}/>
            </div>
        );
    }
}

export default FollowedQuestions;
