import React from "react";

class Search extends React.Component{
    render() {
        return(
            <div className="ui action input" style={{width: '390px'}}>
                <input type="text" placeholder="Search..."/>
                <button className="ui icon button">
                    <i className="search icon"></i>
                </button>
            </div>
        );
    }
}

export default Search;
