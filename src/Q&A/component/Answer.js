import React, {useEffect, useState} from "react";
import faker from "faker";
import Discussion from './Discussion'
import {Button, Accordion, Icon, Popup} from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux";
import {createReply} from "../../actions/questions";

const Answer = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (e, titleProps) => {
        const {index} = titleProps
        const newIndex = activeIndex === index ? -1 : index
        setActiveIndex(newIndex)
    }

    const dispatch = useDispatch();

    const [description, setDescription] = useState();


    const user = JSON.parse(localStorage.getItem('user'))._id;
    const Reply = {
        user,
        description,
    }
    var result = [];
    for (var i in props.replies)
        result.push([i, props.replies[i]]);

    const handleSubmit = () => {
        console.log(Reply);
        dispatch(createReply(Reply, props.idQ, props.idA))
    }

    return (
        <div className="comment" style={{marginLeft: '30px'}}>
            <a className="avatar">
                <img src={faker.image.avatar()}/>
            </a>
            <div className="content">
                <a className="author">Elliot Fu</a>
                <Button basic color='green' compact size='mini' content='Mark As Solution'
                        style={{marginLeft: '5px'}}/>
                <div className="metadata">
                    <span className="date">Yesterday at 12:30AM</span>
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
                                <input/>
                            </div>
                            <div className="ui blue labeled submit icon button">
                                <i className="icon flag"/> Report
                            </div>
                        </form>}
                        on='click'
                        pinned
                        trigger={<a className="reply">Report</a>}
                    />
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
            ) : (<p>0 Replies</p>)}

        </div>

    );

}

export default Answer;
