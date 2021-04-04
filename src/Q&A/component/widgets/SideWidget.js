import React from "react";
import TopUser from "../TopUser"
import {Accordion, Card, Button} from "react-bootstrap";
import {Dropdown, Header, Icon} from 'semantic-ui-react'
import faker from "faker";

const options = [
    {
        key: 'Programming',
        text: 'Programming',
        value: 'Programming',
        content: 'Programming',
    },
    {
        key: 'Math',
        text: 'Math',
        value: 'Math',
        content: 'Math',
    },
    {
        key: 'Physiques',
        text: 'Physiques',
        value: 'Physiques',
        content: 'Physiques',
    },
]

class SideWidget extends React.Component {
    render() {
        return (
            <>
                <div className="ui raised segment" style={{display: 'flex', marginBottom: '10px', justifyContent: 'space-between'}}>
                    <div>
                        <Header as='h6'>Top Problem Solvers</Header>

                    </div>
                    <div>
                        <Header as='h6'>
                            <Header.Content>
                                {' '}
                                <Dropdown
                                    inline
                                    header='Domain'
                                    options={options}
                                    defaultValue={options[0].value}
                                />
                            </Header.Content>
                        </Header>
                    </div>
                </div>
                <div className="ui raised segments" style={{marginTop: '0px'}}>
                    <TopUser/>
                    <TopUser/>
                    <TopUser/>
                    <TopUser/>
                    <TopUser/>
                </div>
            </>
        );
    }
}

export default SideWidget;
