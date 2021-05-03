import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {searchQuestion} from "../../../actions/questions";

const Search = () => {
    const [text, setText] = useState();
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(searchQuestion(text))
    }
    return (
        <div className="ui action input">
            <input type="text" placeholder="Search..." onChange={(e) => setText(e.target.value)}/>
            <button className="ui icon button" onClick={handleSearch}>
                <i className="search icon"/>
            </button>
        </div>
    );
}

export default Search;
