import React from "react";
import TopUser from "./TopUser";

class SideWidget extends React.Component {
    render() {
        return (
            <div className="widget widget-user ui segment">
                <h3 className="title-wd">Top Problem Solvers</h3>
                <ul>
                    <TopUser/>
                    <TopUser/>
                    <TopUser/>
                    <TopUser/>
                    <TopUser/>
                </ul>
            </div>
        );
    }
}

export default SideWidget;
