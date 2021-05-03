import React, {Component} from 'react'
import {Menu, Icon} from 'semantic-ui-react'

export default class SideMenu extends Component {
    state = {}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    handleHome = (e, {name}) => {
        window.location.href = '/q_and_a'
        this.setState({activeItem: name})
    }
    handleAll = (e, {name}) => {
        window.location.href = '/allQuestions'
        this.setState({activeItem: name})
    }

    handlePopular = (e, {name}) => {
        window.location.href = '/popular'
        this.setState({activeItem: name})
    }

    render() {
        const {activeItem} = this.state

        return (
            <Menu vertical>
                <Menu.Item>
                    <Menu.Header>Q&A Menu Feed</Menu.Header>

                    <Menu.Menu>
                        <Menu.Item
                            name='Home'
                            active={activeItem === 'Home'}
                            onClick={this.handleHome}
                        > Home <Icon name='home icon'/>

                        </Menu.Item>
                        <Menu.Item
                            name='All'
                            active={activeItem === 'All'}
                            onClick={this.handleAll}
                        >All Questions <Icon name='world icon'/></Menu.Item>
                        <Menu.Item
                            name='Popular'
                            active={activeItem === 'Popular'}
                            onClick={this.handlePopular}
                        >Popular <Icon name='paper plane icon'/></Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Domains</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                            name='Programming'
                            active={activeItem === 'Programming'}
                            onClick={this.handleItemClick}
                        > Programming <Icon name='computer icon'/>

                        </Menu.Item>
                        <Menu.Item
                            name='Math'
                            active={activeItem === 'Math'}
                            onClick={this.handleItemClick}
                        >Math <Icon name='calculator icon'/></Menu.Item>
                        <Menu.Item
                            name='Physics '
                            active={activeItem === 'Physics '}
                            onClick={this.handleItemClick}
                        >Physics <Icon name='bolt icon'/></Menu.Item>
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        )
    }
}
