import React from "react";
import '../styles/UserQuestion.css';
import faker from 'faker'
import {Popup, Placeholder, Dropdown, Divider, Image} from 'semantic-ui-react'
import QuestionVote from "./QuestionVote";

class UserQuestion extends React.Component {

    render() {
        return (
            <div className={`${this.props.segment}`} style={{float: 'left', marginBottom: '10px'}}>

                <div className="ui top left attached label">Programming</div>

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
                    <QuestionVote/>
                </div>
                <div className="usr_quest"
                     style={{marginTop: '20px', marginBottom: '5px', marginLeft: '5px', marginRight: '0px'}}>
                    <h3 style={{marginBottom: '1px'}}>{faker.lorem.sentences()}</h3>
                    <Divider style={{marginBottom: '0px'}}/>
                    <div className="descp container-fluid">
                        <Image src={faker.image.image()} size='small' centered/>
                        <br/>
                        <p>
                            {faker.lorem.paragraphs()}
                        </p>
                        <p>
                            {faker.lorem.paragraphs()}
                        </p>
                        <Image src={faker.image.image()} size='small' centered/>
                        <p>
                            {faker.lorem.paragraphs()}
                        </p>
                    </div>
                    <ul className="skill-tags">
                        <li><a href="#" title="">HTML</a></li>
                        <li><a href="#" title="">PHP</a></li>
                        <li><a href="#" title="">CSS</a></li>
                        <li><a href="#" title="">Javascript</a></li>
                    </ul>
                </div>

                <a className="ui teal right ribbon label" hidden={!this.props.solved}>Solved</a>

                <ul className="react-links">
                    <li>
                        <a href="/question_details" title=""><i className="fas fa-comment-alt"/>Answers 15</a>
                    </li>
                    <li>
                        <a href="#" title=""><i className="fas fa-eye"/>Views 50</a>
                    </li>
                    <li>
                        <a href="#" title=""><i className="fas fa-flag"/>Report</a>
                    </li>
                    <li>
                        <Dropdown circular icon='fas fa-ellipsis-h'>
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    icon='star'
                                    text='Follow'
                                />
                                <Dropdown.Item
                                    icon='bookmark'
                                    text='Bookmark'
                                />
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li style={{color: "darkgrey", float: "right"}}>
                        <h3><i className="fas fa-clock-o"/>{new Date().toLocaleTimeString()}</h3>
                    </li>
                </ul>
            </div>
        );
    }
}

export default UserQuestion;
