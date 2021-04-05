import React from "react";
import {Segment, Button, Label, Item, Icon,} from 'semantic-ui-react'

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
            <Segment key="big" size="big" clearing>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>Header</Item.Header>

                                <Item.Extra>
                                    <Label as='a' color='blue' image>
                                        <img src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg'/>
                                        Veronika
                                        <Label.Detail>Friend</Label.Detail>
                                    </Label><Label>
                                    <Icon name='mail'/> 23
                                </Label>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </div>
                    <div>
                        <Button toggle active={activeFollow} compact circular icon='fas fa-star' floated='right'
                                onClick={this.handleClickFollow}/>
                        <Button toggle active={activeBookmark} compact circular icon='fas fa-bookmark' floated='right'
                                onClick={this.handleClickBookmark}/>
                    </div>
                </div>
            </Segment>
        );
    }
}

export default FollowQuestion;
