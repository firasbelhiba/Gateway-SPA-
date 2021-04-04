import React from "react";
import '../styles/UserQuestion.css';

class QuestionVote extends React.Component {
    constructor() {
        super();
        this.state = {vote: 0, colorUp: "darkgrey", colorDown: "darkgrey", upVote: false, downVote: false}
    }

    handleUpvote = () => {
        if (this.state.upVote) {
            this.setState({vote: this.state.vote - 1, upVote: false, colorUp: "darkgrey"});
        } else {
            if (this.state.downVote) {
                this.setState({
                    vote: this.state.vote + 2,
                    upVote: true,
                    colorUp: "darkblue",
                    colorDown: "darkgrey",
                    downVote: false
                });
            } else {
                this.setState({vote: this.state.vote + 1, upVote: true, colorUp: "darkblue"});
            }
        }

    }
    handleDownvote = () => {
        if (this.state.downVote) {
            this.setState({vote: this.state.vote + 1, downVote: false, colorDown: "darkgrey"});
        } else {
            if (this.state.upVote) {
                this.setState({
                    vote: this.state.vote - 2,
                    upVote: false,
                    colorUp: "darkgrey",
                    colorDown: "darkred",
                    downVote: true
                });
            } else {
                this.setState({vote: this.state.vote - 1, downVote: true, colorDown: "darkred"});
            }
        }
    }

    render() {
        return (
            <div className="container-fluid"
                 style={{marginTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <i id="upVote" className="large fa-chevron-up icon"
                   style={{cursor: 'pointer', color: `${this.state.colorUp}`}}
                   onClick={this.handleUpvote}/>
                <div style={{paddingRight: '3px', paddingBottom: '6px', paddingTop: '6px'}}>{this.state.vote}</div>
                <i id="downVote" className="large fa-chevron-down icon"
                   style={{cursor: 'pointer', color: `${this.state.colorDown}`}}
                   onClick={this.handleDownvote}/>
            </div>
        );
    }
}

export default QuestionVote
