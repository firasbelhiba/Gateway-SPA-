import _ from 'lodash'
import React, {Component} from 'react'
import {Dropdown} from 'semantic-ui-react'

const getOptions = () =>
    [
        {key: "Programming", text: "Programming", value: _.snakeCase("Programming")},
        {key: "Math", text: "Math", value: _.snakeCase("Math")},
        {key: "Physics", text: "Physics", value: _.snakeCase("Physics")},
    ]


class SelectDomain extends Component {
    state = {
        isFetching: false,
        multiple: true,
        search: true,
        searchQuery: null,
        value: null,
        options: this.props.alldomains,
    }


    handleChange = (e, {value}) => {
        this.setState({value})
        this.props.getDomain(value)
        console.log(value)
    }

    render() {
        const {options, value} = this.state

        return (
            <Dropdown
                fluid
                selection
                options={options}
                value={value}
                placeholder='Select Domain'
                onChange={this.handleChange}
            />

        )
    }
}

export default SelectDomain;
