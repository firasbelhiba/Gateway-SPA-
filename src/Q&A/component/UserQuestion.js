import React from "react";
import '../styles/UserQuestion.css';
import faker from 'faker'
import {Popup, Card, Image} from 'semantic-ui-react'

class UserQuestion extends React.Component {

    render() {
        return (
            <div>
                <div className="usr_img wrapper">
                    <Popup
                        trigger={<img src={faker.image.avatar()}/>}
                    >
                        <Popup.Content>
                            <Image src={faker.image.image()}/>
                            <Card.Header>{faker.name.firstName()} {faker.name.lastName()}</Card.Header>
                            <Card.Description>

                            </Card.Description>
                        </Popup.Content>
                    </Popup>
                    <div style={{marginTop: '40px', marginLeft: '20px'}}>
                        <div id="upvote"/>
                        <br/>
                        <div id="downvote"/>
                    </div>
                </div>
                <div className="usr_quest">
                    <h3>{faker.lorem.sentences()}</h3>
                    <div className="descp">
                        <p>{faker.lorem.paragraph()}.. <a href="/question_details" title="">view more</a></p>
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
                        <a href="#" title=""><i className="check icon"/>Vote 150</a>
                    </li>
                    <li>
                        <a href="#" title=""><i className="fas fa-comment-alt"/>Comments 15</a>
                    </li>
                    <li>
                        <a href="#" title=""><i className="fas fa-eye"/>Views 50</a>
                    </li>
                    <li>
                        <a href="#" title=""><i className="fas fa-flag"/>Report</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default UserQuestion;
