import React from "react";
import faker from 'faker'
class TopUser extends React.Component {

    render() {
        return (
            <li>
                <div className="usr-msg-details">
                    <div className="usr-ms-img">
                        <img src={faker.image.avatar()} alt="top"/>
                    </div>
                    <div className="usr-mg-info">
                        <h3>{faker.name.firstName()} {faker.name.lastName()}</h3>
                        <p>{faker.name.jobTitle()}</p>
                    </div>
                </div>
                <span><img src="images/price1.png" alt=""/>{faker.random.number()}</span>
            </li>
        );
    }
}

export default TopUser;
