import React, { Fragment, useState } from 'react'
import Review_item from './items/Review_item'

import Review_form from './Forms/Review_form';



const Review_profile = ({ avatar, showActions, reviews, id, hisName, myName }) => {
    const [formState, toggleState] = useState("");
    let classActive = "";
    if (formState === "add") {
        classActive = "active";
    }

    if (formState === "") {
        classActive = "";
    }

    return (
        <div>

            <section></section>
            <div className="posts-section">
                <div className="post-bar reviewtitle">
                    <h2>Reviews
                        {showActions &&
                            <Fragment>
                                <a onClick={() => toggleState("add")} className="replybtn" style={{ float: 'right', color: 'white', cursor: 'pointer' }} >Add a review</a>
                            </Fragment>}
                    </h2>
                </div>
                {reviews.map((review) => (
                    <Review_item avatar={avatar} review={review} />
                ))}

            </div>


            <div className={`post-popup job_post ${classActive}`} >
                <div className="post-project" >
                    <h3 style={{ color: 'white', marginBottom: "0px" }}>Add a post
                    <a onClick={() => toggleState("")} title="">
                            <i
                                className="la la-times-circle-o mr-2"
                                style={{ color: "white", float: "right" }}
                            ></i>
                        </a>
                    </h3>
                    <Review_form id={id} hisName={hisName} myName={myName} />

                </div>
            </div>
        </div>
    )
}


Review_profile.defaultProps = {
    showActions: false,
};


export default Review_profile
