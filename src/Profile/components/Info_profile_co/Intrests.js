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
            {props.intrests.length === 0 ? <div>You have no intrests for the moment , go update your profile if you have one </div> :
                <ul>
                    {intrests}
                </ul>
            }

        </div>)
}

export default Intrests
