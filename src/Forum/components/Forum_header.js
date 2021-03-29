import React from 'react'

const Forum_header = () => {
    return (
        <div className="post-topbar">
            <div className="user-picy">
                <img src="assets/images/resources/user-pic.png" alt="" />
            </div>
            <div className="post-st">
                <ul>
                    <li>
                        <a className="post_project" href="#" title=""
                        >Post a Project</a>
                    </li>
                    <li>
                        <a className="post-jb active" href="#" title=""
                        >Post a Job</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Forum_header
