import TextArea from "react-textarea-autosize";
import Button from "./Button2";
import React, {useState} from 'react';
import styled from "styled-components";

function Reply(props) {
    const [text, setText] = useState("");
    return (
        <div {...props}>
            <TextArea
                placeholder="What are your thoughts?"
                minRows={2}
                defaultValue={text}
                onChange={value => {
                    setText(value.target.value);
                }}
            />
            <div className="panel">
                <div className="comment_as">
                    Comment
                    <a href="" className="username">
                    </a>
                </div>
                <Button reply={text} idQ={props.Qid} idA={props.Aid}>Reply</Button>
            </div>
        </div>
    );
}

Reply = styled(Reply)`
  border-radius: 8px;
  border: solid 1px #3d4953;
  overflow: hidden;

  &.hidden {
    display: none;
  }

  textarea {
    font-family: inherit;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    resize: none;

    background: #13181d;
    padding: 12px;
    color: #cccccc;
    border: none;
    max-width: 100%;
    min-width: 100%;
  }

  .panel {
    display: flex;
    align-items: center;
    background: #3d4953;
    padding: 8px;

    .comment_as {
      font-size: 14px;
      color: #cccccc;
      margin-right: 8px;

      .username {
        display: inline-block;
        color: #4f9eed;
      }
    }

    ${Button} {
      font-size: 14px;
      margin-left: auto;
    }
  }
`;

export default Reply
