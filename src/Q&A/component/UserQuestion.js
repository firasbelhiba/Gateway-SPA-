import React from "react";
import '../styles/UserQuestion.css';
import faker from 'faker'
import {Popup, Placeholder, Dropdown, Divider} from 'semantic-ui-react'
import QuestionVote from "./QuestionVote";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteQuestion} from "../../actions/questions";

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

    const handleDelete = () => {
        dispatch(deleteQuestion(props.details._id))
    }

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
                    <p>
                        {props.details.description}
                    </p>
                    <code>
                        {faker.lorem.paragraphs()}
                    </code>
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
                    <Link to={`/question_details?id=${props.details._id}`} title=""><i
                        className="fas fa-comment-alt"/>Answers 15</Link>
                </li>
                <li>
                    <a href="#" title=""><i className="fas fa-eye"/>Views 50</a>
                </li>
                <li>
                    <a href="#" title=""><i className="fas fa-flag"/>Report</a>
                </li>
                <li>
                    <Dropdown circular icon='fas fa-ellipsis-h'>
                        {JSON.parse(localStorage.getItem('user'))._id !== props.details.user ||
                        JSON.parse(localStorage.getItem('user'))._id === null ? (
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    icon='star'
                                    text='Follow'
                                />
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
