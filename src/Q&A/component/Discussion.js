import faker from "faker";
import React from "react";

class Answer extends React.Component {

    render() {
        return (
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
                        <a className="reply">Like</a>
                        <a className="report">Report</a>
                    </div>
                </div>
            </div>
        );
    }

}

export default Answer;
