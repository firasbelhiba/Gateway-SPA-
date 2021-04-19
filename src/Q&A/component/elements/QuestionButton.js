import React, {useState, useEffect} from 'react';
import {Button, Modal} from 'semantic-ui-react';
import SelectTags from "../SelectTags";
import {useDispatch, useSelector} from "react-redux";
import {createQuestion} from '../../../actions/questions';

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

const QuestionButton = () => {
    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        size: undefined,
    })
    const {open, size} = state

    const [subject, setSubject] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();
    const [tags, setTags] = useState();

    const Question = {
        subject,
        description,
        category,
        tags
    }

    const submitDispatch = useDispatch();

    const handleSubmit = () => {
        console.log(Question);
        submitDispatch(createQuestion(Question))
        dispatch({type: 'close'});
    }

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
                            <textarea onChange={event => {
                                setDescription(event.target.value);
                                console.log(event.target.value);
                            }}/>
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
