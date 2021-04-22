import React, {useState} from "react";
import faker from "faker";
import Discussion from './Discussion'
import {Button, Accordion, Icon, Popup} from 'semantic-ui-react'
import {useDispatch} from "react-redux";
import {createReply, markSolution, createAnswerReport, deleteAnswer} from "../../actions/questions";

const Answer = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (e, titleProps) => {
        const {index} = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }

    const dispatch = useDispatch();

    const [description, setDescription] = useState();
    const [reason, setReason] = useState();

    var result = [];
    for (var i in props.replies)
        result.push([i, props.replies[i]]);

    const handleSubmit = () => {
        const user = JSON.parse(localStorage.getItem('user'))._id;
        const Reply = {
            user,
            description,
        }
        dispatch(createReply(Reply, props.idQ, props.idA))
    }

    const handleReport = () => {
        const user = JSON.parse(localStorage.getItem('user'))._id;
        const report = {
            user,
            reason,
        }
        dispatch(createAnswerReport(report, props.idQ, props.idA))
    }

    const solutionSubmit = () => {
        dispatch(markSolution(props.idQ, props.idA))
    }

    const handleDelete = () => {
        dispatch(deleteAnswer(props.idQ, props.idA))
    }
    let sol = '';
    let color = 'green';
    let content = 'Mark As Solution';

    if (props.solution) {
        sol = 'green message';
        color = 'red';
        content = 'Cancel Solution'
    }
    return (
        <div className={`ui ${sol} comment`} style={{marginLeft: '30px'}}>
            <a className="avatar">
                <img src={faker.image.avatar()}/>
            </a>
            <div className="content">
                <a className="author">Elliot Fu</a>
                {JSON.parse(localStorage.getItem('user'))._id === props.userid && !props.solved ? (
                    <Button basic color='green' compact size='mini' content='Mark As Solution'
                            style={{marginLeft: '5px'}} onClick={solutionSubmit}/>

                ) : (<></>)}
                {JSON.parse(localStorage.getItem('user'))._id === props.userid && props.solution ? (
                    <Button basic color='red' compact size='mini' content='Cancel Solution'
                            style={{marginLeft: '5px'}} onClick={solutionSubmit}/>

                ) : (<></>)}
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>
                <div className="text">
                    <p>{props.description}</p>
                </div>
                <div className="actions">
                    <a className="like">Like</a>
                    <Popup
                        content={<form className="ui reply form">
                            <div className="field">
                                <input onChange={event => {
                                    console.log(event.target.value)
                                    setDescription(event.target.value)
                                }}/>
                            </div>
                            <div className="ui blue labeled submit icon button" onClick={handleSubmit}>
                                <i className="icon edit"/> Reply
                            </div>
                        </form>}
                        on='click'
                        pinned
                        trigger={<a className="reply">Reply</a>}
                    />
                    <Popup
                        content={<form className="ui reply form">
                            <div className="field">
                                <input onChange={event => {
                                    console.log(event.target.value)
                                    setReason(event.target.value)
                                }}/>
                            </div>
                            <div className="ui blue labeled submit icon button" onClick={handleReport}>
                                <i className="icon flag"/> Report
                            </div>
                        </form>}
                        on='click'
                        pinned
                        trigger={<a className="reply">Report</a>}
                    />
                    {JSON.parse(localStorage.getItem('user'))._id === props.answerUser ? (
                        <a className="like" onClick={handleDelete}>Delete</a>
                    ) : (<></>)}
                </div>
            </div>
            {result.length ? (
                <Accordion>
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={handleClick}
                    >
                        <Icon name='dropdown'/>
                        Show Replies
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <div className="comments row">
                            {props.replies.map(reply => (
                                <Discussion reply={reply}/>
                            ))}
                        </div>
                    </Accordion.Content>
                </Accordion>
            ) : (<></>)}
        </div>
    );

}

export default Answer;
