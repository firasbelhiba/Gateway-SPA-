import React from "react";
import {Icon, Label, List} from "semantic-ui-react";
import {cancelDomains} from "../../../actions/questions";
import {useDispatch} from "react-redux";

const SelectedItem = ({domain, user}) => {
    const dispatch = useDispatch();
    const handleCancel = () => {
        dispatch(cancelDomains(user, domain))
    }
    return (
        <List.Item>
            <List.Content>
                <div style={{display: "flex"}}>
                    <List.Content>
                        <Icon className="fa-newspaper"/>
                        <List.Header as="a" onClick={handleCancel}>{domain}</List.Header>
                    </List.Content>
                </div>
            </List.Content>
        </List.Item>
    );
}

export default SelectedItem
