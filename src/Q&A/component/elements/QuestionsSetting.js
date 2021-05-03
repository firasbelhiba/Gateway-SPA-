import React, {useState} from 'react'
import {Button, Modal, Select, Statistic} from 'semantic-ui-react'
import SelectedDomains from "./SelectedDomains";
import SelectDomain from "./SelectDomain";
import {useDispatch} from "react-redux";
import {addDomain} from "../../../actions/questions";

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

const QuestionsSetting = ({Domains}) => {
    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        dimmer: undefined,
    })
    const user = JSON.parse(localStorage.getItem('user'))._id;
    const {open, dimmer} = state
    const [category, setCategory] = useState(null);

    const Sdispatch = useDispatch();

    const handleAccept = () => {
        if (category !== null) {
            var Data = {
                category,
            }
            console.log(Data)
            Sdispatch(addDomain(Data, user))

        }
    }
    const handleSelected = (value) => {
        setCategory(value)
    }
    return (
        <div>
            <Button circular icon='settings'
                    onClick={() => dispatch({type: 'OPEN_MODAL', dimmer: 'blurring'})}
            >
            </Button>

            <Modal
                dimmer={dimmer}
                open={open}
                onClose={() => dispatch({type: 'CLOSE_MODAL'})}
            >
                <Modal.Header>Relevant Questions Setting</Modal.Header>
                <Modal.Content>
                    <Statistic size='mini'>
                        <Statistic.Value>Selected Domains</Statistic.Value>
                    </Statistic>
                    <div>
                        <SelectedDomains Domains={Domains}/>
                    </div>
                    <Statistic size='mini'>
                        <Statistic.Value>Add a domain</Statistic.Value>
                    </Statistic>
                    <div>
                        <SelectDomain getDomain={handleSelected}/>
                    </div>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative onClick={() => dispatch({type: 'CLOSE_MODAL'})}>
                        Disagree
                    </Button>
                    <Button positive onClick={handleAccept}>
                        Agree
                    </Button>
                </Modal.Actions>
            </Modal>
        </div>
    )
}


export default QuestionsSetting
