import React, {Component} from 'react'
import {Menu, Label} from 'semantic-ui-react'
import RelevantQuestions from "../tabs/RelevantQuestions";
import MyQuestions from "../tabs/MyQuestions";
import FollowedQuestions from "../tabs/FollowedQuestions";
import PopularQuestions from "../tabs/PopularQuestions";

export default class MenuExamplePointing extends Component {
    state = {activeItem: 'Most Relevant For You', content: <RelevantQuestions/>}

    handleItemClick = (e, data) => {
        this.setState({activeItem: data.name});
        this.props.onChange(data.content)
        console.log(data.content)
    }

    render() {
        const {activeItem} = this.state

        return (
            <div className="ui segment">
                <Menu pointing secondary>
                    <Menu.Item
                        content={<RelevantQuestions/>}
                        name='Most Relevant For You'
                        active={activeItem === 'Most Relevant For You'}
                        onClick={this.handleItemClick}
                    > Most Relevant For You
                    </Menu.Item>
                    <Menu.Item
                        content={<MyQuestions/>}
                        name='My Questions'
                        active={activeItem === 'My Questions'}
                        onClick={this.handleItemClick}
                    >
                        My Questions
                    </Menu.Item>
                    <Menu.Item
                        content={<PopularQuestions/>}
                        name='Popular This Week'
                        active={activeItem === 'Popular This Week'}
                        onClick={this.handleItemClick}
                    >Popular This Week
                    </Menu.Item>
                    <Menu.Item
                        content={<FollowedQuestions/>}
                        name='Followed'
                        active={activeItem === 'Followed'}
                        onClick={this.handleItemClick}
                    >Followed <Label color='teal'>1</Label>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
