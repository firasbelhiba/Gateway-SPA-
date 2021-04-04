import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const SortItem = () => (
    <Dropdown
        text='Sort'
        icon='sort'
        floating
        labeled
        button
        className='icon'
    >
        <Dropdown.Menu>
            <Dropdown.Header icon='tags' content='Sort by ...' />
            <Dropdown.Divider />
            <Dropdown.Item icon='clock' text='Most Recent' />
            <Dropdown.Item icon='like' text='Most Liked' />
            <Dropdown.Item icon='conversation' text='Most Comments' />
            <Dropdown.Item icon='eye' text='Most Views' />
        </Dropdown.Menu>
    </Dropdown>
)

export default SortItem;
