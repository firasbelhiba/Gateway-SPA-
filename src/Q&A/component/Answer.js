import React from "react";
import faker from "faker";

class Answer extends React.Component {

    render() {
        return (
            <div className="comment" style={{marginLeft: '30px'}}>
                <a className="avatar">
                    <img src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a className="author">Elliot Fu</a>
                    <div className="metadata">
                        <span className="date">Yesterday at 12:30AM</span>
                    </div>
                    <div className="text">
                        <p>This has been very useful for my research. Thanks as well!</p>
                    </div>
                    <div className="actions">
                        <a className="reply">Reply</a>
                    </div>
                </div>
                <div className="comments">
                    <div className="comment">
                        <a className="avatar">
                            <img src={faker.image.avatar()}/>
                        </a>
                        <div className="content">
                            <a className="author">Jenny Hess</a>
                            <div className="metadata">
                                <span className="date">Just now</span>
                            </div>
                            <div className="text">
                                Elliot you are always so right :)
                            </div>
                            <div className="actions">
                                <a className="reply">Reply</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default Answer;
