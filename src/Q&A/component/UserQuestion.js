import React from "react";
import '../styles/UserQuestion.css';
import faker from 'faker'
import {Popup, Placeholder, Dropdown, Divider} from 'semantic-ui-react'
import QuestionVote from "./Votes/QuestionVote";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addView, deleteQuestion, unFollowQuestion, followQuestion} from "../../actions/questions";
import ReadOnly from "./TextEditor/ReadOnly";

const UserQuestion = (props) => {

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

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'))._id;

    var Answers = [];
    for (var i in props.details.answers)
        Answers.push(props.details.answers[i]);

    const handleDelete = () => {
        dispatch(deleteQuestion(props.details._id))
    }
    const handleFollow = () => {
        dispatch(followQuestion(props.details._id, user))
    }
    const handleUnFollow = () => {
        dispatch(unFollowQuestion(props.details._id, user))
    }
    var Following = [];
    for (var i in props.details.following)
        Following.push(props.details.following[i].user);

    return (
        <div className={`${props.segment} row`} style={{float: 'left', marginBottom: '10px'}}>

            <div className="ui top left attached label">{props.details.category}</div>

            <div className="usr_img wrapper">
                <Popup
                    flowing hoverable
                    trigger={<img src={faker.image.avatar()}/>}
                >
                    <Popup.Content>
                        <Placeholder>
                            <Placeholder.Header image>
                                <Placeholder.Line/>
                                <Placeholder.Line/>
                            </Placeholder.Header>
                            <Placeholder.Paragraph>
                                <Placeholder.Line length='medium'/>
                                <Placeholder.Line length='short'/>
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </Popup.Content>
                </Popup>
                <QuestionVote upVotes={props.details.upVotes} downVotes={props.details.downVotes}
                              id={props.details._id}/>
            </div>
            <div className="usr_quest"
                 style={{marginTop: '20px', marginBottom: '5px', marginLeft: '5px', marginRight: '0px'}}>
                <h3 style={{marginBottom: '1px'}}>{props.details.subject}</h3>
                <Divider style={{marginBottom: '0px'}}/>
                <div className="descp" style={{display: 'block'}}>
                    <ReadOnly initialValue={JSON.parse(props.details.description)}/>
                </div>
                <ul className="skill-tags">
                    {props.details.tags.map(tag => (
                        <li><a href="#" title="">{tag}</a></li>
                    ))}
                </ul>
            </div>

            <a className="ui teal right ribbon label" hidden={!props.details.solved}>Solved</a>

            <ul className="react-links">
                <li>
                    <Link to={`/question_details?id=${props.details._id}`}
                          onClick={() => {
                              dispatch(addView(props.details._id));
                          }}
                          title=""><i
                        className="fas fa-comment-alt"/>Answers {Answers.length}</Link>
                </li>
                <li>
                    <a href="#" title=""><i className="fas fa-eye"/>Views {props.details.views}</a>
                </li>
                <li>
                    <Dropdown circular icon='fas fa-ellipsis-h'>
                        {JSON.parse(localStorage.getItem('user'))._id !== props.details.user ||
                        JSON.parse(localStorage.getItem('user'))._id === null ? (
                            <Dropdown.Menu>
                                {Following.includes(user) ? (<Dropdown.Item
                                    icon='star'
                                    text='Unfollow'
                                    onClick={handleUnFollow}
                                />) : (<Dropdown.Item
                                    icon='star'
                                    text='Follow'
                                    onClick={handleFollow}
                                />)}

                                <Dropdown.Item
                                    icon='bookmark'
                                    text='Bookmark'
                                />
                            </Dropdown.Menu>) : (
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    icon='trash'
                                    text='Delete'
                                    onClick={handleDelete}
                                />
                            </Dropdown.Menu>)
                        }
                    </Dropdown>
                </li>
                <li style={{color: "darkgrey", float: "right"}}>
                    <h3><i className="fas fa-clock-o"/>{formatDate(props.details.date.toString())}</h3>
                </li>
            </ul>
        </div>
    );
}

export default UserQuestion;
