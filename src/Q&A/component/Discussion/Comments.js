import React from "react";
import Comment from "./Comment";

const Comments = (props) => {

    console.log(props.replies)
    return <Comment comments={props.replies} idQ={props.idQ} idA={props.idA}/>;
}

export default Comments;
