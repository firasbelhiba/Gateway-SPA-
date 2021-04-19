import React, {useEffect} from "react";
import FollowQuestion from "../elements/FollowQuestion";
import {useDispatch, useSelector} from "react-redux";
import {getQuestion} from "../../../actions/questions";

const FollowedQuestions = () => {

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

export default FollowedQuestions;
