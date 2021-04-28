import React, {useState} from "react";
import styled from "styled-components";
import {upvoteReply, downvoteReply} from "../../../actions/questions";
import {useDispatch} from "react-redux";

function Rating(props) {
    const user = JSON.parse(localStorage.getItem('user'))._id;
    const dispatch = useDispatch();

    const [upVotes, setUpVotes] = useState(props.UpVotes);
    const [downVotes, setDownVotes] = useState(props.DownVotes);

    var UpVotes = [];
    for (var i in upVotes)
        UpVotes.push(upVotes[i].user);

    var DownVotes = [];
    for (var j in downVotes)
        DownVotes.push(downVotes[j].user);

    const [count, setCount] = useState(UpVotes.length - DownVotes.length);

    const [thumbsUp, setThumbsUp] = useState(UpVotes.includes(user));
    const [thumbsDown, setThumbsDown] = useState(DownVotes.includes(user));
    const [Up, setUp] = useState(false);
    const [Down, setDown] = useState(false);
    const handleUpvote = () => {
        setThumbsUp(!thumbsUp);
        setThumbsDown(false);
        setUp(!Up);
        setDown(false);
        if (Down) {
            setCount(count + 2)
        } else if (Up) {
            setCount(count - 1)
        } else {
            setCount(count + 1)
        }
        dispatch(upvoteReply(props.idQ, props.idA, props.idR, user));
    }
    const handleDownvote = () => {
        setThumbsDown(!thumbsDown);
        setThumbsUp(false);
        setUp(false);
        setDown(!Down);
        if (Up) {
            setCount(count - 2)
        } else if (Down) {
            setCount(count + 1)
        } else {
            setCount(count - 1)
        }
        dispatch(downvoteReply(props.idQ, props.idA, props.idR, user));
    }

    return (
        <div {...props}>
            <button
                className={`material-icons ${thumbsUp ? "selected" : ""}`}
                id="thumbs_up"
                onClick={handleUpvote}
            >
                keyboard_arrow_up
            </button>
            <div
                className={`count ${thumbsUp ? "up" : ""} ${thumbsDown ? "down" : ""}`}
            >
                {thumbsUp ? count : ""}
                {thumbsDown ? count : ""}
                {thumbsUp || thumbsDown ? "" : count}
            </div>
            <button
                className={`material-icons ${thumbsDown ? "selected" : ""}`}
                id="thumbs_down"
                onClick={handleDownvote}
            >
                keyboard_arrow_down
            </button>
        </div>
    );
}

Rating = styled(Rating)`
  display: flex;
  flex-direction: column;
  margin-right: 12px;

  .count {
    font-weight: bold;
    text-align: center;
    color: #3d4953;

    &.up {
      color: #4f9eed;
    }

    &.down {
      color: #ed4f4f;
    }
  }

  button#thumbs_up,
  button#thumbs_down {
    border: none;
    background: none;
    cursor: pointer;
    color: #3d4953;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
  }

  #thumbs_up.selected {
    color: #4f9eed;
  }

  #thumbs_down.selected {
    color: #ed4f4f;
  }
`;

export default Rating
