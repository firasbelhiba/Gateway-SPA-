import React, {useState} from "react";
import styled from "styled-components";
import {upvoteReply, downvoteReply} from "../../../actions/questions";
import {useDispatch} from "react-redux";

function Rating(props) {
    const dispatch = useDispatch();

    const handleUpvote = () => {
        dispatch(upvoteReply(props.idQ, props.idA, props.idR, props.user));
    }
    const handleDownvote = () => {
        dispatch(downvoteReply(props.idQ, props.idA, props.idR, props.user));
    }

    return (
        <div {...props}>
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
