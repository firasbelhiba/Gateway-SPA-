import React from 'react'
import {Dropdown} from 'semantic-ui-react'
import {useDispatch} from "react-redux";
import {sortQuestion} from "../../../actions/questions";


const SortItem = () => {
    const dispatch = useDispatch();

    const sortViews = () => {
        dispatch(sortQuestion('views'))
    }
    const sortAnswers = () => {
        dispatch(sortQuestion('answers'))
    }
    const sortVotes = () => {
        dispatch(sortQuestion('votes'))
    }
    const sortRecent = () => {
        dispatch(sortQuestion('recent'))
    }
    return (
        <Dropdown
            text='Sort'
            icon='sort'
            floating
            labeled
            button
            className='icon'
        >
            <Dropdown.Menu>
                <Dropdown.Header icon='tags' content='Sort by ...'/>
                <Dropdown.Divider/>
                <Dropdown.Item icon='clock' text='Most Recent' onClick={sortRecent}/>
                <Dropdown.Item icon='like' text='Most Liked' onClick={sortVotes}/>
                <Dropdown.Item icon='conversation' text='Most Answers' onClick={sortAnswers}/>
                <Dropdown.Item icon='eye' text='Most Views' onClick={sortViews}/>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SortItem;
