import React from "react";
import Comment from "./Comment";

const Comments = (props) => {
    return <Comment comments={props.replies} idQ={props.idQ} idA={props.idA}/>;
}

export default Comments;
