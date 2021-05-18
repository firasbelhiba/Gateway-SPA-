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
    handleDomain = (e, {name}) => {
        console.log(name)
        window.location.href = '/domain?domain='+name
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
                        {this.props.Domains.map(domain => (
                                <Menu.Item
                                    name={domain.name}
                                    active={activeItem === domain.name}
                                    onClick={this.handleDomain}
                                > {domain.name} <Icon name={domain.icon}/>

                                </Menu.Item>
                            )
                        )}
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        )
    }
}
