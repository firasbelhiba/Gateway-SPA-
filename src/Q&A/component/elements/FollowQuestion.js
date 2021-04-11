import React from "react";
import {Segment, Button, Label, Item, Icon,} from 'semantic-ui-react'
import '../../styles/FollowQuestion.css'
import faker from "faker";

class FollowQuestion extends React.Component {
    state = {}
    handleClickFollow = () =>
        this.setState((prevState) => ({
            activeFollow: !prevState.activeFollow
        }))
    handleClickBookmark = () =>
        this.setState((prevState) => ({
            activeBookmark: !prevState.activeBookmark,
        }))

    render() {
        const {activeBookmark, activeFollow} = this.state
        return (
            <div className={this.props.solved ? "ui green inverted raised segment" :"ui raised segment"}>
                <div className="ui bottom attached label">
                    <Label color='blue' image size='mini'>
                        <img src={faker.image.avatar()}/>
                        {faker.name.firstName()} {faker.name.lastName()}
                    </Label>
                    <Label color='teal' image size='mini'>
                        Programming
                    </Label>
                    <Label color='yellow' image size='mini'>
                        Active
                    </Label>
                    <div className="ui label">
                        <i className="comments icon"/> 23
                    </div>

                    <div style={{float: "right"}} hidden={!this.props.solved}>
                        <Label color='green' image size='mini'>
                            <img src={faker.image.avatar()}/>
                            {faker.name.firstName()} {faker.name.lastName()}
                        </Label>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{width: '670px'}}>
                        <h1>{faker.lorem.sentence()}</h1>
                    </div>
                    <div style={{paddingBottom: '5px'}}>
                        <Button toggle active={activeFollow} compact color='yellow' circular icon='fas fa-star'
                                floated='right'
                                onClick={this.handleClickFollow}/>
                        <Button toggle active={activeBookmark} compact circular icon='fas fa-bookmark'
                                floated='right'
                                onClick={this.handleClickBookmark}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FollowQuestion;
