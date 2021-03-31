import React from "react";
import { Tab } from 'semantic-ui-react'

const OptionsBar = () => {
    const panes = [
        {
            menuItem: 'Most Relevant For You'},
        {
            menuItem: 'My Questions',
        },
        {
            menuItem: 'Followed',
        },
        {
            menuItem: 'Popular This Week',
        },
    ]
    return (
        <section className="forum-sec ui segment">
            <div className="container">
                <div className="forum-links">
                    <ul>
                        <Tab menu={{ secondary: true, pointing: true }} panes={panes}/>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default OptionsBar;
