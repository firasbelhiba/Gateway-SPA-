import React from "react";
import faker from "faker";
import Discussion from './Discussion'
import { Button } from 'semantic-ui-react'

class Answer extends React.Component {

    render() {
        return (
            <div className="comment" style={{marginLeft: '30px'}}>
                <a className="avatar">
                    <img src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a className="author">Elliot Fu</a>
                    <Button basic color='green' compact size='mini' content='Mark As Solution' style={{marginLeft: '5px'}} />
                    <div className="metadata">
                        <span className="date">Yesterday at 12:30AM</span>
                    </div>
                    <div className="text">
                        <p>This has been very useful for my research. Thanks as well!</p>
                    </div>
                    <div className="actions">
                        <a className="like">Like</a>
                        <a className="reply">Reply</a>
                        <a className="reply">Report</a>
                    </div>
                </div>
                <div className="comments">
                    <Discussion/>
                </div>
            </div>

        );
    }

}

export default Answer;
