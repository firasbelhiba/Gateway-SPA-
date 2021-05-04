import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
    List,
    ListItem,
    Divider,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Typography
} from "@material-ui/core";
import Faker from "faker";
import Button from "@material-ui/core/Button";
import {deleteReply} from "../../../actions/questions";
import {useDispatch} from "react-redux";
import RatingReply from "../Votes/RatingReply";
import {getProfileById} from "../../../actions/profile";
import CommentReply from "../elements/CommentReply";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.background.paper
    },
    fonts: {
        fontWeight: "bold"
    },
    inline: {
        display: "inline"
    }
}));

const Comment = ({comments, idQ, idA}) => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('user'))._id;


    return (
        <List className={classes.root}>
            {comments.map(comment => (
                <CommentReply user={user} comment={comment} classes={classes} idA={idA} idQ={idQ}/>
            ))}
        </List>
    );
};

export default Comment;
