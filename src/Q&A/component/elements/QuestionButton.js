import React, {useState, useEffect} from 'react';
import {Button, Modal, Form, Input} from 'semantic-ui-react';
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

    const [subject, setSubject] = useState(null);
    const [category, setCategory] = useState(null);
    const [tags, setTags] = useState(null);
    const [subjecterror, setSubjecterror] = useState(false);
    const [categoryerror, setCategoryerror] = useState(false);
    const [tagserror, setTagserror] = useState(false);
    const [descriptionerror, setDescriptionserror] = useState(false);
    const submitDispatch = useDispatch();
    const handleSubmit = () => {
        if (!subject) {
            setSubjecterror(true)
        }
        if (!category) {
            setCategoryerror(true)
        }
        if (!tags) {
            setTagserror(true)
        }
        if (input === initialValue) {
            setDescriptionserror(true)
        }
        if(subject && category && tags && input !== initialValue){
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
                    <Form>
                        <Form.Field required>
                            <label>Subject</label>
                            <Form.Input placeholder="Subject"
                                        error={subjecterror ? {
                                            content: 'Please enter Category',
                                            pointing: 'below'
                                        } : false}
                                        fluid
                                        onChange={event => {
                                            setSubject(event.target.value);
                                            setSubjecterror(false)
                                        }}/>

                        </Form.Field>
                        <Form.Field required>
                            <label>Category</label>
                            <Form.Input placeholder="Category"
                                        error={categoryerror ? {
                                            content: 'Please enter Category',
                                            pointing: 'below'
                                        } : false}
                                        fluid
                                        onChange={event => {
                                            setCategory(event.target.value);
                                            setCategoryerror(false)
                                        }}/>
                        </Form.Field>
                        <Form.Field required
                                    error={tagserror ? {
                                        content: 'Please enter at least one tag',
                                        pointing: 'below',
                                    } : false}
                        >
                            <label>Tags</label>
                            <SelectTags onChange={(value) => {
                                setTags(value);
                                setTagserror(false)
                            }}/>
                        </Form.Field>
                        <Form.Field required
                                    error={descriptionerror ? {
                                        content: 'Please enter at least one tag',
                                        pointing: 'below',
                                    } : false}
                        >
                            <label>Description</label>
                            <RichEditor value={input} setValue={setInput} setDesc={setDescriptionserror}/>
                        </Form.Field>
                    </Form>
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
