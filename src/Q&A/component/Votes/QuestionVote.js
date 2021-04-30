import React, {useState} from "react";
import '../../styles/UserQuestion.css';
import {createVote, createDownVote} from "../../../actions/questions";
import {useDispatch} from "react-redux";
import './Rating.css'

const QuestionVote = (props) => {
    const dispatch = useDispatch();
    const [up, setup] = useState(props.thumbsUp);
    const [down, setdown] = useState(props.thumbsDown);
    const [count, setcount] = useState(props.count);

    const handleUpvote = () => {
        if (down) {
            setup(!up);
            setdown(!down);
            setcount(count + 2);
        } else if (up) {
            setup(!up);
            setcount(count - 1);

        } else {
            setup(!up);
            setcount(count + 1);
        }
        dispatch(createVote(props.id, props.user));
    }
    const handleDownvote = () => {
        if (up) {
            setup(!up);
            setdown(!down);
            setcount(count - 2);
        } else if (down) {
            setdown(!down);
            setcount(count + 1);

        } else {
            setdown(!down);
            setcount(count - 1);
        }
        dispatch(createDownVote(props.id, props.user));
    }

    return (
        <div>
            <button
                style={{fontSize: 35}}
                className={`material-icons ${up ? "selected" : ""}`}
                id="thumbs_up"
                onClick={handleUpvote}
            >
                keyboard_arrow_up
            </button>
            <div
                className={`count ${up ? "up" : ""} ${down ? "down" : ""}`}
                style={{fontSize: 20, paddingRight: 8}}
            >
                {count}
            </div>
            <button
                style={{fontSize: 35}}
                className={`material-icons ${down ? "selected" : ""}`}
                id="thumbs_down"
                onClick={handleDownvote}
            >
                keyboard_arrow_down
            </button>
        </div>
    );
}

export default QuestionVote
