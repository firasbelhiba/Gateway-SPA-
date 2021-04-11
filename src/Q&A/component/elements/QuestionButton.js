import React from 'react';
import {Button, Modal} from 'semantic-ui-react';
import SelectTags from "../SelectTags";

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
                            <input type="text" placeholder="Subject"/>
                        </div>
                        <div className="eight wide field">
                            <label>Category</label>
                            <input type="text" placeholder="Category"/>
                        </div>
                        <div className="eight wide field">
                            <label>Tags</label>
                            <SelectTags/>
                        </div>
                        <div className="field">
                            <label>Description</label>
                            <textarea></textarea>
                        </div>
                    </div>
                </Modal.Content>
                <Modal.Actions>
                    <button className="ui icon button">
                        <i className="cloud upload icon"></i>
                    </button>
                    <Button positive onClick={() => dispatch({type: 'close'})}>
                        Submit
                    </Button>
                </Modal.Actions>
            </Modal>
        </>
    )
}

export default QuestionButton;
