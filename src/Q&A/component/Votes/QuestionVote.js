import React, {useState} from "react";
import '../../styles/UserQuestion.css';
import {createVote, CancelVote, createDownVote, CancelDownVote} from "../../../actions/questions";
import {useDispatch} from "react-redux";

const QuestionVote = (props) => {

    const user = JSON.parse(localStorage.getItem('user'))._id;

    var upVotes = [];
    for (var i in props.upVotes)
        upVotes.push(props.upVotes[i].user);
    console.log(upVotes)

    var downVotes = [];
    for (var j in props.downVotes)
        downVotes.push(props.downVotes[j].user);
    console.log(downVotes)

    const dispatch = useDispatch();

    const [vote, setVote] = useState(upVotes.length - downVotes.length);
    const [colorUp, setColorUp] = useState(() => {
        if (upVotes.includes(user)) {
            return "darkblue";
        } else {
            return "darkgrey";
        }
    });
    const [colorDown, setColorDown] = useState(() => {
        if (downVotes.includes(user)) {
            return "darkred";
        } else {
            return "darkgrey";
        }
    });
    const [upVote, setUpVote] = useState(upVotes.includes({user: user}));
    const [downVote, setDownVote] = useState(downVotes.includes({user: user}));

    const handleUpvote = () => {
        if (upVote) {
            dispatch(CancelVote(props.id, user));
            setVote(vote - 1);
            setUpVote(false);
            setColorUp("darkgrey");
        } else {
            if (downVote) {
                dispatch(CancelDownVote(props.id, user));
                dispatch(createVote(props.id, user));
                setVote(vote + 2);
                setUpVote(true);
                setColorUp("darkblue");
                setColorDown("darkgrey");
                setDownVote(false);
            } else {
                dispatch(createVote(props.id, user));
                setVote(vote + 1);
                setUpVote(true);
                setColorUp("darkblue");
            }
        }
    }
    const handleDownvote = () => {
        if (downVote) {
            dispatch(CancelDownVote(props.id, user));
            setVote(vote + 1);
            setDownVote(false);
            setColorDown("darkgrey");
        } else {
            if (upVote) {
                dispatch(CancelVote(props.id, user));
                dispatch(createDownVote(props.id, user));
                setVote(vote - 2);
                setUpVote(false);
                setColorUp("darkgrey");
                setColorDown("darkred");
                setDownVote(true);
            } else {
                dispatch(createDownVote(props.id, user));
                setVote(vote - 1);
                setDownVote(true);
                setColorDown("darkred");
            }
        }
    }
    return (
        <div className="container-fluid"
             style={{marginTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <i id="upVote" className="large fa-chevron-up icon"
               style={{cursor: 'pointer', color: `${colorUp}`}}
               onClick={handleUpvote}/>
            <div style={{paddingRight: '3px', paddingBottom: '6px', paddingTop: '6px'}}>{vote}</div>
            <i id="downVote" className="large fa-chevron-down icon"
               style={{cursor: 'pointer', color: `${colorDown}`}}
               onClick={handleDownvote}/>
        </div>
    );
}

export default QuestionVote
