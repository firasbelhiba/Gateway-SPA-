import React from "react";
import faker from 'faker'

class Question extends React.Component {

    render() {
        return (
            <li>
                <div className="info">
                    <div className="details">
                        <h3>{faker.lorem.sentence()}</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                    </div>
                </div>
            </li>
        );
    }
}

export default Question;
