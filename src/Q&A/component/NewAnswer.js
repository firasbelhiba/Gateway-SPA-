import React, {useEffect, useState} from "react";
import {Avatar, Grid} from "@material-ui/core";
import {Accordion, Icon, Popup} from "semantic-ui-react";
import AnswerVote from "./AnswerVote";
import Discussion from "./Discussion";
import Rating from "./Votes/Rating";
import ReadOnly from "./TextEditor/ReadOnly";
import ToggleDisplay from "react-toggle-display";
import Reply from "./elements/Reply/Reply";
import Button from '@material-ui/core/Button';
import {deleteAnswer, markSolution} from "../../actions/questions";
import {useDispatch} from "react-redux";
import {Button as ButtonS} from 'semantic-ui-react'
import Comments from "./Discussion/Comments";
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import UpDown from "./Votes/UpDown";
import {getProfileById} from "../../actions/profile";

const imgLink =
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

export const NewAnswer = (props) => {
    const user = JSON.parse(localStorage.getItem('user'))._id;

    const [activeIndex, setActiveIndex] = useState(null);
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        getProfileById(props.userid)
    }, [dispatch]);
    const profile = JSON.parse(localStorage.getItem('profile'));

    const handleClick = (e, titleProps) => {
        const {index} = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }
    const handleShow = () => {
        setShow(!show);
    }
    const solutionSubmit = () => {
        dispatch(markSolution(props.idQ, props.idA))
    }
    const handleDelete = () => {
        dispatch(deleteAnswer(props.idQ, props.idA))
    }

    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    var Replies = [];
    for (var i in props.replies)
        Replies.push(props.replies[i]);

    var UpVotes = [];
    for (var i in props.UpVote)
        UpVotes.push(props.UpVote[i].user);

    var DownVotes = [];
    for (var j in props.DownVotes)
        DownVotes.push(props.DownVotes[j].user);

    return (
        <Grid container wrap="nowrap" spacing={2}>
            <Grid item style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar alt={profile.avatar} src={profile.avatar}/>
                <div style={{marginLeft: "10px", marginTop: "5px"}}>
                    <Rating count={UpVotes.length - DownVotes.length} idQ={props.idQ} idA={props.idA}
                            user={user}
                            thumbsUp={UpVotes.includes(user)} thumbsDown={DownVotes.includes(user)}/>
                </div>
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <h4 style={{textAlign: "left"}}>{profile.name}</h4>
                    {props.solution ?
                        (<h4 style={{color: "green", marginLeft: '20px'}}>Solution <CheckCircleRoundedIcon
                            htmlColor={"green"}/></h4>) :
                        (<></>)}
                    <div style={{marginLeft: '20px'}}>
                        {JSON.parse(localStorage.getItem('user'))._id === props.userid && !props.solved ? (
                            <ButtonS basic color='green' compact size='mini' content='Mark As Solution'
                                     style={{marginLeft: '5px'}} onClick={solutionSubmit}/>

                        ) : (<></>)}
                        {JSON.parse(localStorage.getItem('user'))._id === props.userid && props.solution ? (
                            <ButtonS basic color='red' compact size='mini' content='Cancel Solution'
                                     style={{marginLeft: '5px'}} onClick={solutionSubmit}/>

                        ) : (<></>)}
                    </div>
                </div>

                <p style={{textAlign: "left", color: "gray", marginTop: "5px", marginBottom: "2px"}}>
                    {formatDate(props.date.toString())}
                </p>
                <ReadOnly initialValue={JSON.parse(props.description)}/>
                <div style={{display: "flex"}}>
                    <Accordion>
                        <Accordion.Title
                            active={activeIndex === 0}
                            index={0}
                            onClick={handleClick}
                        >
                            <div style={{width: "500px", paddingTop: '0px'}}>
                                <Icon name='dropdown'/>
                                <a>Show {Replies.length} Replies</a>
                            </div>
                        </Accordion.Title>
                        <div style={{width: "500px", paddingTop: '4px'}}>
                            <ToggleDisplay show={show}>
                                <Reply Qid={props.idQ} Aid={props.idA}/>
                            </ToggleDisplay>
                        </div>
                        <Accordion.Content active={activeIndex === 0}>
                            <Comments replies={props.replies} idQ={props.idQ} idA={props.idA}/>
                        </Accordion.Content>
                    </Accordion>
                    <div className="react-links" style={{marginLeft: '130px', position: "absolute", marginTop: "3px"}}>
                        <Button size="small" color="primary" onClick={() => handleShow()}>Reply</Button>
                        {JSON.parse(localStorage.getItem('user'))._id === props.answerUser ? (
                            <Button size="small" onClick={handleDelete}>Delete</Button>
                        ) : (<></>)}
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}


