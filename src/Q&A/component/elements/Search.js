import React from "react";

class Search extends React.Component{
    render() {
        return(
            <div className="ui action input">
                <input type="text" placeholder="Search..."/>
                <button className="ui icon button">
                    <i className="search icon"></i>
                </button>
            </div>
        );
    }
}

export default Search;
