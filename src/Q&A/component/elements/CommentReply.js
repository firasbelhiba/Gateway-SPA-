import React, {useEffect} from "react";
import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography} from "@material-ui/core";
import RatingReply from "../Votes/RatingReply";
import Faker from "faker";
import Button from "@material-ui/core/Button";
import {deleteReply} from "../../../actions/questions";
import {getProfileById} from "../../../actions/profile";
import {useDispatch} from "react-redux";

const CommentReply = ({comment, user, idQ, idA, classes}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        getProfileById(comment.user)
    }, [dispatch]);
    const profile = JSON.parse(localStorage.getItem('profile'));
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

                    <Avatar alt="avatar" src={profile.avatar}/>
                </ListItemAvatar>
                <div className="content">
                    <ListItemText
                        primary={
                            <Typography className={classes.fonts}>
                                {profile.name}
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
                    </div>
                </div>
            </ListItem>
            <Divider/>
        </React.Fragment>
    );
}

export default CommentReply;
