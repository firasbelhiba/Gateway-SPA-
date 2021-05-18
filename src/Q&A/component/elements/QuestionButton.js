import React, {useState, useEffect} from 'react';
import {Button, Modal, Form} from 'semantic-ui-react';
import SelectTags from "../SelectTags";
import {useDispatch, useSelector, connect} from "react-redux";
import {createQuestion, getALLDomains, getBlock} from '../../../actions/questions';
import RichEditor from "../TextEditor/RichEditor";
import SelectDomain from "../SelectDomain";
import _ from "lodash";

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

const QuestionButton = ({getALLDomains, user, getBlock, question: {block, alldomains}}) => {
    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        dimmer: undefined,
    })

    useEffect(() => {
        getBlock(user)
        getALLDomains()
    }, [dispatch]);

    console.log(alldomains)
    const [input, setInput] = useState(initialValue);
    const {open, dimmer} = state
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
        if (subject && category && tags && input !== initialValue) {
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
            dispatch({type: 'CLOSE_MODAL'});
        }
    }
    var tagsOptionns = []
    for (var i in alldomains) {
        if (category !== null && alldomains[i].name.toUpperCase() === category.toUpperCase())
            for (var j in alldomains[i].tags) {
                tagsOptionns.push({
                    key: alldomains[i].tags[j],
                    text: alldomains[i].tags[j],
                    value: _.snakeCase(alldomains[i].tags[j])
                })
            }
    }
    return (
        <>
            <Button className="ui button" onClick={() => dispatch({type: 'OPEN_MODAL', dimmer: 'blurring'})}>
                Ask Question
            </Button>

            <Modal
                dimmer={dimmer}
                open={open}
                onClose={() => dispatch({type: 'CLOSE_MODAL'})}
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
                        <Form.Field required
                                    error={categoryerror ? {
                                        content: 'Please enter Category',
                                        pointing: 'below'
                                    } : false}>
                            <label>Category</label>
                            <SelectDomain
                                alldomains={alldomains}
                                onChange={(value) => {
                                    setCategory(value);
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
                                tagsOptionns={tagsOptionns}
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
                    <Button positive disabled={!block.question} onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    )
}

const mapStateToProps = (state) => ({
    question: state.question,
});

export default connect(mapStateToProps, {getBlock, getALLDomains})(QuestionButton);
