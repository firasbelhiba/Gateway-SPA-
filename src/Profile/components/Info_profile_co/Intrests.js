import React from 'react'

const Intrests = (props) => {
    const intrests = props.intrests.map(item => (
        <li><a href="#" title="">{item}</a></li>
    ));
    return (
        <div className="user-profile-ov">
            <h3>
                <a title="" className="skills-open">Intrests</a>
            </h3>
            <ul>
                {intrests}
            </ul>
        </div>)
}

export default Intrests
