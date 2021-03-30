import React from "react";

class FilterItem extends React.Component {
    render() {
        return(
            <div className="ui floating dropdown labeled icon button">
                <i className="filter icon"/>
                <span className="text">Filter By</span>
                <div className="menu">
                    <div className="ui icon search input">
                        <i className="search icon"/>
                        <input type="text" placeholder="Search tags..."/>
                    </div>
                    <div className="divider"/>
                    <div className="header">
                        <i className="tags icon"/>
                        Tag Label
                    </div>
                    <div className="scrolling menu">
                        <div className="item">
                            <div className="ui red empty circular label"/>
                            Important
                        </div>
                        <div className="item">
                            <div className="ui blue empty circular label"/>
                            Announcement
                        </div>
                        <div className="item">
                            <div className="ui black empty circular label"/>
                            Cannot Fix
                        </div>
                        <div className="item">
                            <div className="ui purple empty circular label"/>
                            News
                        </div>
                        <div className="item">
                            <div className="ui orange empty circular label"/>
                            Enhancement
                        </div>
                        <div className="item">
                            <div className="ui empty circular label"/>
                            Change Declined
                        </div>
                        <div className="item">
                            <div className="ui yellow empty circular label"/>
                            Off Topic
                        </div>
                        <div className="item">
                            <div className="ui pink empty circular label"/>
                            Interesting
                        </div>
                        <div className="item">
                            <div className="ui green empty circular label"/>
                            Discussion
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterItem;
