import React, {useState, useEffect} from 'react';
import {Button, Modal} from 'semantic-ui-react';
import SelectTags from "../SelectTags";
import {useDispatch, useSelector} from "react-redux";
import {createQuestion} from '../../../actions/questions';
import RichEditor from "../TextEditor/RichEditor";
import AnswerEditor from "../TextEditor/AnswerEditor";

function exampleReducer(state, action) {
    switch (action.type) {
        case 'close':
            return {open: false}
        case 'open':
            return {open: true, size: action.size}
        default:
            throw new Error('Unsupported action...')
    }
}

const initialValue = [{"type": "paragraph", "children": [{"text": ""}]}];

const QuestionButton = () => {
    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        size: undefined,
    })
    const [input, setInput] = useState(initialValue);
    console.log(JSON.stringify(input));
    const {open, size} = state

    const [subject, setSubject] = useState();
    const [category, setCategory] = useState();
    const [tags, setTags] = useState();

    const submitDispatch = useDispatch();

    const handleSubmit = () => {
        const user = JSON.parse(localStorage.getItem('user'))._id;
        const description = localStorage.getItem('content');
        const Question = {
            user,
            subject,
            description,
            category,
            tags
        }
        console.log(Question);
        submitDispatch(createQuestion(Question))
        dispatch({type: 'close'});
    }
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    return (
        <>
            <Button className="ui button" onClick={() => dispatch({type: 'open', size: 'small'})}>
                Ask Question
            </Button>

            <Modal
                style={{position: 'relative'}}
                size={size}
                open={open}
                onClose={() => dispatch({type: 'close'})}
            >
                <Modal.Header>Post Your Question</Modal.Header>
                <Modal.Content>
                    <div className="ui form">
                        <div className="eight wide field">
                            <label>Subject</label>
                            <input type="text" placeholder="Subject" onChange={event => {
                                setSubject(event.target.value);
                                console.log(event.target.value);
                            }}/>
                        </div>
                        <div className="eight wide field">
                            <label>Category</label>
                            <input type="text" placeholder="Category" onChange={event => {
                                setCategory(event.target.value);
                                console.log(event.target.value);
                            }}/>
                        </div>
                        <div className="eight wide field">
                            <label>Tags</label>
                            <SelectTags onChange={(value) => {
                                setTags(value);
                                console.log(value);
                            }}/>
                        </div>
                        <div className="field">
                            <label>Description</label>
                            <RichEditor value={input} setValue={setInput}/>
                        </div>
                    </div>
                </Modal.Content>
                <Modal.Actions>
                    <button className="ui icon button">
                        <i className="cloud upload icon"/>
                    </button>
                    <Button positive onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    )
}

export default QuestionButton;
