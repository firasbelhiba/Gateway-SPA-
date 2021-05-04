import React, {useState} from 'react';
import {Button, Modal, Form, Dropdown} from 'semantic-ui-react';
import SelectTags from "../SelectTags";
import {useDispatch} from "react-redux";
import {updateQuestion} from '../../../actions/questions';
import RichEditor from "../TextEditor/RichEditor";

function exampleReducer(state, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {open: true, dimmer: action.dimmer}
        case 'CLOSE_MODAL':
            return {open: false}
        default:
            throw new Error()
    }
}

const initialValue = [{"type": "paragraph", "children": [{"text": ""}]}];

const QuestionUpdate = ({details}) => {
    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        dimmer: undefined,
    })
    const [input, setInput] = useState(JSON.parse(details.description));
    const {open, dimmer} = state

    const [subject, setSubject] = useState(details.subject);
    const [category, setCategory] = useState(details.category);
    const [tags, setTags] = useState(details.tags);

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
        if (subject && category && tags && input !== initialValue) {
            const description = localStorage.getItem('content');
            const Question = {
                subject,
                description,
                category,
                tags
            }
            console.log(Question);
            submitDispatch(updateQuestion(Question, details._id))
            dispatch({type: 'CLOSE_MODAL'});
        }
    }

    return (
        <>
            <Dropdown.Item
                icon='clipboard'
                text='Update'
                onClick={() => dispatch({type: 'OPEN_MODAL', dimmer: 'blurring'})}
            />
            <Modal
                dimmer={dimmer}
                open={open}
                onClose={() => dispatch({type: 'CLOSE_MODAL'})}
            >
                <Modal.Header>Modify Your Question</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field required>
                            <label>Subject</label>
                            <Form.Input placeholder="Subject"
                                        value={subject}
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
                                        value={category}
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
                            <SelectTags
                                tags={tags}

                                onChange={(value) => {
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

export default QuestionUpdate;
