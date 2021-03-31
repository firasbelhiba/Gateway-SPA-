import React from 'react'

export const Skills = (props) => {
    const skills = props.skills.map(item => (
        <li><a href="#" title="">{item}</a></li>
    ));
    return (
        <div className="user-profile-ov">
            <h3>
                <a title="" className="skills-open">Skills</a>
            </h3>
            <ul>

                {skills}
            </ul>
        </div>
    )
}
