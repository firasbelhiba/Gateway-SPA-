import React from "react";
import {Dropdown} from 'semantic-ui-react'
import {useDispatch} from "react-redux";
import {filterQuestion} from "../../../actions/questions";

const FilterItem = () => {
    const dispatch = useDispatch();

    const filterHTML = () => {
        dispatch(filterQuestion('html'))
    }
    const filterPHP = () => {
        dispatch(filterQuestion('php'))
    }
    const filterCSS = () => {
        dispatch(filterQuestion('css'))
    }
    const filterJavaScript = () => {
        dispatch(filterQuestion('javascript'))
    }
    return (
        <Dropdown
            text='Filter'
            icon='filter'
            floating
            labeled
            button
            className='icon'
        >
            <Dropdown.Menu>
                <Dropdown.Header icon='tags' content='Filter by tag'/>
                <Dropdown.Item onClick={filterHTML}>HTML</Dropdown.Item>
                <Dropdown.Item onClick={filterPHP}>PHP</Dropdown.Item>
                <Dropdown.Item onClick={filterCSS}>CSS</Dropdown.Item>
                <Dropdown.Item onClick={filterJavaScript}>JavaScript</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default FilterItem;
