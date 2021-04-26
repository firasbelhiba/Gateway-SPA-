import React from 'react'
import { Link } from 'react-router-dom';
import Follow from '../../Profileby/components/Follow';

const Suggestions_friends = () => {
    let friendsSuggestions = JSON.parse(localStorage.getItem("suggestions_friends"));

    return (
        <div className="widget suggestions full-width">
            <div className="sd-title">
                <h3>Suggestions for you</h3>
                <i className="la la-ellipsis-v"></i>
                <span><Link to={"/profiles"} ><i className="la la-plus"></i></Link></span>

            </div>
            <div className="suggestions-list">

                {friendsSuggestions === null ?
                    <div className="suggestion-usd">
                        <div className="sgt-text">
                            <h4>No suggestions for the moment ! Come later !</h4>
                        </div>

                    </div> : friendsSuggestions.map((item) => (
                        <div className="suggestion-usd">
                            <img style={{ width: '30px', height: '30px' }} src={item.avatar} alt="" />
                            <div className="sgt-text">
                                <h4>{item.name}</h4>
                            </div>
                        </div>
                    ))}



            </div>
        </div>
    )
}

export default Suggestions_friends
