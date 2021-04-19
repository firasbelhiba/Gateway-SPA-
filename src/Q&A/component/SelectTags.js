import _ from 'lodash'
import React, {Component} from 'react'
import {Dropdown} from 'semantic-ui-react'

const getOptions = () =>
    [
        {key: "CSS", text: "CSS", value: _.snakeCase("CSS")},
        {key: "HTML", text: "HTML", value: _.snakeCase("HTML")},
        {key: "PHP", text: "PHP", value: _.snakeCase("PHP")},
        {key: "Javascript", text: "Javascript", value: _.snakeCase("Javascript")},
        {key: "Java", text: "Java", value: _.snakeCase("Java")},
        {key: "C++", text: "C++", value: _.snakeCase("C++")},
        {key: "C#", text: "C#", value: _.snakeCase("C#")},
        {key: "ReactJS", text: "ReactJS", value: _.snakeCase("ReactJS")},
        {key: "NodeJs", text: "NodeJs", value: _.snakeCase("NodeJs")},
        {key: "Express", text: "Express", value: _.snakeCase("Express")},
        {key: "ReactNative", text: "ReactNative", value: _.snakeCase("ReactNative")},
        {key: "SpringBoot", text: "SpringBoot", value: _.snakeCase("SpringBoot")}
    ]


class SelectTags extends Component {
    state = {
        isFetching: false,
        multiple: true,
        search: true,
        searchQuery: null,
        value: [],
        options: getOptions(),
    }

    handleChange = (e, {value}) => {
        this.setState({value})
        this.props.onChange(value)
    }

    render() {
        const {multiple, options, isFetching, search, value} = this.state

        return (
            <Dropdown
                fluid
                selection
                multiple={multiple}
                search={search}
                options={options}
                value={value}
                placeholder='Select Tags'
                onChange={this.handleChange}
                disabled={isFetching}
                loading={isFetching}
            />

        )
    }
}

export default SelectTags;
