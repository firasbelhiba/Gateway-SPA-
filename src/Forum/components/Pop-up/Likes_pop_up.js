import { map } from 'lodash'
import React from 'react'
import "../Css/Style.css"

const Likes_pop_up = ({ likes }) => {
    return (
        <div class="scrollbar" id="style-default">
            <div class="force-overflow">
                <div className="post-project-fields">

                    <form className="dropzone" >
                        <div className="row">
                            {likes.map((like) => (
                                <div className="suggestions-list">
                                    <div className="suggestion-usd">
                                        <img src={like.avatar} style={{ width: '35px', height: '35px' }} alt="" />
                                        <div className="sgt-text">
                                            <h4>{like.name}</h4>
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

export default Likes_pop_up
