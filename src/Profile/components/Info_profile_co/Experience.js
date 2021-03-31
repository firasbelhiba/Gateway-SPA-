import React from 'react'
import Experience_item from './Items/Experience_item'



export const Experience = () => {
    return (
        <div className="user-profile-ov st2">
            <h3>
                <a href="#" title="" className="exp-bx-open">Experience</a>
                <a href="#" title="" className="exp-bx-open"
                ><i className="fa fa-pencil"></i></a>
                <a href="#" title="" className="exp-bx-open"
                ><i className="fa fa-plus-square"></i></a>
            </h3>
            <Experience_item />

        </div>
    )
}
