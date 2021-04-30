import React from "react";
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
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'))._id;


    return (
        <List className={classes.root}>
            {comments.map(comment => {
                console.log(comment)

                var UpVotes = [];
                for (var i in comment.upVotes)
                    UpVotes.push(comment.upVotes[i].user);

                var DownVotes = [];
                for (var j in comment.downVotes)
                    DownVotes.push(comment.downVotes[j].user);

                return (
                    <React.Fragment key={comment.id}>
                        <ListItem key={comment.id} alignItems="flex-start">
                            <ListItemAvatar style={{display: 'flex', flexDirection: 'row', marginRight: "5px"}}>

                                <RatingReply count={UpVotes.length - DownVotes.length} user={user}
                                             thumbsUp={UpVotes.includes(user)} thumbsDown={DownVotes.includes(user)}
                                             idQ={idQ} idA={idA} idR={comment._id}/>

                                <Avatar alt="avatar" src={Faker.image.avatar()}/>
                            </ListItemAvatar>
                            <div className="content">
                                <ListItemText
                                    primary={
                                        <Typography className={classes.fonts}>
                                            {comment.user}
                                        </Typography>
                                    }
                                    secondary={
                                        <>
                                            {comment.description}
                                        </>
                                    }
                                />
                                <div className="actions">
                                    {JSON.parse(localStorage.getItem('user'))._id === comment.user ? (
                                        // eslint-disable-next-line no-undef
                                        <Button size="small" onClick={() => {
                                            console.log(comment._id + ' ' + idQ + ' ' + idA)
                                            dispatch(deleteReply(idQ, idA, comment._id))
                                        }}>Delete</Button>
                                    ) : (<></>)}
                                    {JSON.parse(localStorage.getItem('user'))._id === comment.user ? (
                                        // eslint-disable-next-line no-undef
                                        <Button size="small" onClick={() => {
                                            console.log(comment._id + ' ' + idQ + ' ' + idA)
                                            dispatch(deleteReply(idQ, idA, comment._id))
                                        }}>Update</Button>
                                    ) : (<></>)}
                                </div>
                            </div>
                        </ListItem>
                        <Divider/>
                    </React.Fragment>
                );
            })}
        </List>
    );
};

export default Comment;
