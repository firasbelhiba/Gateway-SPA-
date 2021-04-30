import React from "react";
import {downvoteAnswer, upvoteAnswer} from "../../../actions/questions";
import {useDispatch} from "react-redux";
import './Rating.css'

const UpDown = (props) => {
    const dispatch = useDispatch();

    const handleUpvote = () => {
        dispatch(upvoteAnswer(props.idQ, props.idA, props.user));
    }
    const handleDownvote = () => {
        dispatch(downvoteAnswer(props.idQ, props.idA, props.user));
    }
    return (
        <div>
            <button
                className={`material-icons ${props.thumbsUp ? "selected" : ""}`}
                id="thumbs_up"
                onClick={handleUpvote}

            >
                keyboard_arrow_up
            </button>
            <div
                className={`count ${props.thumbsUp ? "up" : ""} ${props.thumbsDown ? "down" : ""}`}
            >
                {props.count}
            </div>
            <button
                className={`material-icons ${props.thumbsDown ? "selected" : ""}`}
                id="thumbs_down"
                onClick={handleDownvote}
            >
                keyboard_arrow_down
            </button>
        </div>
    );
}

export default UpDown;
