import React from "react";
import {Label, Tab} from 'semantic-ui-react'
import RelevantQuestions from "../tabs/RelevantQuestions";
import MyQuestions from "../tabs/MyQuestions";
import FollowedQuestions from "../tabs/FollowedQuestions";
import PopularQuestions from "../News/News";

const panes = [
    {
        menuItem: 'Most Relevant For You '  ,
        content: <RelevantQuestions/>,
    },
    {
        menuItem: 'My Questions',
        content: <MyQuestions/>,
    },
    {
        menuItem: 'Followed',
        content: <FollowedQuestions/>,
    },
    {
        menuItem: 'Popular This Week',
        content: <PopularQuestions/>,
    },
]

class OptionsBar extends React.Component {
    state = {content: <RelevantQuestions/>}

    handleChange = (e, data) =>{
        this.props.onChange(panes[data.activeIndex].content)
        //this.setState({content: panes[data.activeIndex].content})
    }

    render() {
        return (
            <section className="forum-sec ui segment">
                <div className="container">
                    <div className="forum-links">
                        <ul>
                            <Tab menu={{secondary: true, pointing: true}} panes={panes} onTabChange={this.handleChange}></Tab>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default OptionsBar;
