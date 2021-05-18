import React, {useState} from 'react'
import {Button as ButtonU, Form, Modal} from 'semantic-ui-react'
import Button from '@material-ui/core/Button';
import RichEditor from "../TextEditor/RichEditor";
import {updateAnswer} from '../../../actions/questions';
import {useDispatch} from "react-redux";

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

const AnswerUpdate = ({initialValue, Qid, Aid}) => {
    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        dimmer: undefined,
    })
    const [descriptionerror, setDescriptionserror] = useState(false);
    const {open, dimmer} = state
    const [input, setInput] = useState(JSON.parse(initialValue));
    const dispatchs = useDispatch();

    const handleModify = () => {
        const description = localStorage.getItem('content');
        const answer = {
            description,
        }
        dispatchs(updateAnswer(answer, Qid, Aid))
    }

    return (
        <>
            <Button size="small"
                    onClick={() => dispatch({type: 'OPEN_MODAL', dimmer: 'blurring'})}
            >
                Update
            </Button>

            <Modal
                dimmer={dimmer}
                open={open}
                onClose={() => dispatch({type: 'CLOSE_MODAL'})}
            >
                <Modal.Header>Update your Answer</Modal.Header>
                <Modal.Content>
                    <RichEditor value={input} setValue={setInput} setDesc={setDescriptionserror}/>
                </Modal.Content>
                <Modal.Actions>
                    <ButtonU negative onClick={() => dispatch({type: 'CLOSE_MODAL'})}>
                        Cancel
                    </ButtonU>
                    <ButtonU positive onClick={handleModify}>
                        Modify
                    </ButtonU>
                </Modal.Actions>
            </Modal>
        </>
    )
}


export default AnswerUpdate;
