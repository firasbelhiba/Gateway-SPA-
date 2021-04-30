import React, {useState} from "react";
import {Button, Label} from 'semantic-ui-react'
import '../../styles/FollowQuestion.css'
import faker from "faker";
import {followQuestion, unFollowQuestion} from "../../../actions/questions";
import {useDispatch} from "react-redux";

const FollowQuestion = (props) => {
    const [activeFollow, setActiveFollow] = useState(true);

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'))._id;

    const handleClickFollow = () => {
        if (activeFollow) {
            dispatch(unFollowQuestion(props.details._id, user))
        } else {
            dispatch(followQuestion(props.details._id, user))

        }
        setActiveFollow(!activeFollow);
    }
    const handleFollow = () => {
    }
    const handleUnFollow = () => {
    }
    var Answers = [];
    for (var i in props.details.answers)
        Answers.push(props.details.answers[i]);

    return (
        <div className={props.details.solved ? "ui green inverted raised segment" : "ui raised segment"}>
            <div className="ui bottom attached label">
                <Label color='blue' image size='mini'>
                    <img src={faker.image.avatar()}/>
                    {faker.name.firstName()} {faker.name.lastName()}
                </Label>
                <Label color='teal' image size='mini'>
                    {props.details.category}
                </Label>
                <Label color='yellow' image size='mini'>
                    Active
                </Label>
                <div className="ui label">
                    <i className="comments icon"/> {Answers.length}
                </div>

                <div style={{float: "right"}} hidden={!props.details.solved}>
                    <Label color='green' image size='mini'>
                        <img src={faker.image.avatar()}/>
                        {faker.name.firstName()} {faker.name.lastName()}
                    </Label>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div style={{width: '670px'}}>
                    <h3>{props.details.subject}</h3>
                </div>
                <div style={{paddingBottom: '5px'}}>
                    <Button toggle active={activeFollow} compact color='yellow' circular icon='fas fa-star'
                            floated='right'
                            onClick={handleClickFollow}/>
                </div>
            </div>
        </div>
    );
}

export default FollowQuestion;
