import React from "react";
import {List} from "semantic-ui-react";
import SelectedItem from "./SelectedItem";

const SelectedDomains = ({Domains}) => {
    var domains = [];
    for (var i in Domains)
        domains.push(Domains[i].category);
    const user = JSON.parse(localStorage.getItem('user'))._id;


    return (
        <List divided horizontal size="small">
            {domains.map(domain => {
                return (
                    <SelectedItem domain={domain} user={user}/>
                );
            })}
        </List>
    );
}

export default SelectedDomains;
