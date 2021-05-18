import React, {useEffect} from "react";
import {Dropdown} from 'semantic-ui-react'
import {connect, useDispatch} from "react-redux";
import {filterQuestion, getALLDomains, getBlock} from "../../../actions/questions";

const FilterItem = ({Domains, getALLDomains, question: {alldomains}}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        getALLDomains()
    }, [dispatch]);
    console.log(alldomains)
    console.log(Domains)

    var tags = []
    for (var i in Domains) {
        for (var j in alldomains) {
            if (Domains[i].category.toUpperCase() === alldomains[j].name.toUpperCase()) {
                for (var k in alldomains[j].tags)
                    tags.push(alldomains[j].tags[k])
            }
        }
    }
    console.log(tags)

    const handleFilter = (e,{value}) => {
        console.log(value)
        dispatch(filterQuestion(value))
    }
    return (
        <Dropdown
            text='Filter'
            icon='filter'
            floating
            labeled
            button
            className='icon'
        >
            <Dropdown.Menu>
                <Dropdown.Header icon='tags' content='Filter by tag'/>
                {tags.map(tag => (
                    <Dropdown.Item value={tag} onClick={handleFilter}>{tag}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

const mapStateToProps = (state) => ({
    question: state.question,
});

export default connect(mapStateToProps, {getALLDomains})(FilterItem);
