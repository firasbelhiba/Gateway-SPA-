import React from "react";
import { Dropdown } from 'semantic-ui-react'

class FilterItem extends React.Component {
    render() {
        return(
            <Dropdown
                text='Filter'
                icon='filter'
                floating
                labeled
                button
                className='icon'
            >
                <Dropdown.Menu>
                    <Dropdown.Header icon='tags' content='Filter by tag' />
                    <Dropdown.Item>HTML</Dropdown.Item>
                    <Dropdown.Item>PHP</Dropdown.Item>
                    <Dropdown.Item>CSS</Dropdown.Item>
                    <Dropdown.Item>JavaScript</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default FilterItem;
