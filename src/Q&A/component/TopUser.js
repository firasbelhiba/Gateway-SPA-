import React from 'react';
import faker from "faker";

class TopUser extends React.Component {

    render() {
        return (
            <div className="ui container segment" style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className="item" style={{width: '210px'}}>
                    <img className="ui avatar image" src={faker.image.avatar()} alt="top"/>
                    <div className="content">
                        <div className="ui sub header">{faker.name.firstName()} {faker.name.lastName()}</div>
                        {faker.name.jobType()}
                    </div>
                </div>
                <div><i
                    className="trophy icon"/>{faker.random.number()}</div>
            </div>
        );
    }
}
export default TopUser;
