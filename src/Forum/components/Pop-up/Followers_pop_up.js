import React from 'react'

const Followers_pop_up = ({ followers }) => {
    return (
        <div class="scrollbar" id="style-default">
            <div class="force-overflow">
                <div className="post-project-fields">

                    <form className="dropzone" >
                        <div className="row">
                            {followers.map((follow) => (
                                <div className="suggestions-list">
                                    <div className="suggestion-usd">
                                        <img src={follow.avatar} style={{ width: '35px', height: '35px' }} alt="" />
                                        <div className="sgt-text">
                                            <h4>{follow.name}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Followers_pop_up
