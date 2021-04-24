import React, { Fragment } from 'react'
import ShowMoreText from 'react-show-more-text';
import TimeAgo from 'timeago-react';
import Gallereact from "gallereact";


const Saved_post_profile = ({ savedPost }) => {

    const executeOnClick = (isExpanded) => {
        console.log(isExpanded);
    };

    return (
        <div className="posts-section">

            {savedPost.length === 0 ? <h2>No post Shared for the moment ! </h2> :
                <Fragment>
                    {savedPost.map((post) => (
                        <div className="post-bar">
                            <div className="post_topbar">
                                <div className="usy-dt">
                                    <img
                                        src={post.avatar}
                                        alt=""
                                        style={{ height: "50px", width: "50px" }}
                                    />
                                    <div className="usy-name">
                                        <h3>{post.name}</h3>
                                        <span>
                                            <img src="assets/images/clock.png" alt="" />
                                            <TimeAgo datetime={post.date} locale="vi" />
                                        </span>
                                    </div>
                                </div>
                                <div className="ed-opts">
                                    <a
                                        title=""
                                        className="ed-opts-open"
                                    >
                                        <i className="far fa-times-circle" style={{ color: '#153b44', cursor: 'pointer' }}></i>
                                    </a>
                                </div>
                            </div>
                            <div className="epi-sec">
                                <ul className="descp">
                                    <li>
                                        <img src="assets/images/icon8.png" alt="" />
                                        <span>Epic Coder</span>
                                    </li>
                                    <li>
                                        <img src="assets/images/icon9.png" alt="" />
                                        <span>India</span>
                                    </li>
                                </ul>

                            </div>
                            <div className="job_descp">
                                <h3>{post.title}</h3>
                                <ul className="job-dt"></ul>
                                <p>
                                    <ShowMoreText
                                        /* Default options */
                                        lines={3}
                                        more="Show more"
                                        less="Show less"
                                        className="content-css"
                                        anchorClass="my-anchor-css-class"
                                        onClick={() => executeOnClick()}
                                        expanded={false}
                                        width={450}
                                    >
                                        {post.text}
                                    </ShowMoreText>
                                </p>



                                <Gallereact
                                    images={post.image}
                                    swipe={true}
                                    loop={false}
                                    titles={true}
                                    displayArrows={false}
                                    slideStyle={{
                                        width: "80%",
                                        height: "90%",
                                        margin: "5% 10%",
                                        boxShadow: "0 2px 20px -1px #2222",
                                    }}
                                    taglineStyle={{ background: "#FFF" }}
                                    titleStyle={{ fontWeight: 800, fontSize: "1.2rem" }}
                                    dotStyle={{
                                        width: "25px",
                                        height: "3px",
                                        borderRadius: 0,
                                        margin: "0px",
                                    }}
                                />


                                <br />
                                <ul className="skill-tags">
                                    <li>
                                        <a href="#" title="">
                                            {post.category}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    ))
                    }
                </Fragment >}


        </div >
    )
}

export default Saved_post_profile
