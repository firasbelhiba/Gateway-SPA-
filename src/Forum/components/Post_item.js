import React, { Fragment, useState } from "react";
import TimeAgo from "timeago-react";
import Gallereact from "gallereact";
import PropTypes from "prop-types";
import Postimage from "./items/Postimage";
import ShowMoreText from "react-show-more-text";
import { SRLWrapper } from "simple-react-lightbox";
import { FacebookButton, LinkedInButton } from "react-social";
import { addLike, removeLike, deletePost } from "../../actions/post";
import { connect } from "react-redux";
import { addViews } from "../../actions/post";
import { Link } from "react-router-dom";
import {
  sharePost,
  deleteShare,
  savePost,
  hidePost,
  deleteHide,
  notifyMe,
  notifyOtherUser,
} from "../../actions/profile";

import "./items/Css/post_item.css";
import Likes_pop_up from "./Pop-up/Likes_pop_up";

const Post_item = ({
  addLike,
  removeLike,
  deletePost,
  sharePost,
  addViews,
  idShare,
  deleteShare,
  savePost,
  hidePost,
  deleteHide,
  notifyMe,
  notifyOtherUser,
  post: {
    _id,
    user,
    name,
    date,
    title,
    text,
    likes,
    comments,
    avatar,
    image,
    category,
    views,
  },
  auth,
  showActions,
}) => {
  let this_user = JSON.parse(localStorage.getItem("user"));
  let profile = JSON.parse(localStorage.getItem("profile"));
  let classActive = "";
  let classActiveClose = "";
  let url = `https://gateway.com/api/posts/this-post?id=${_id}`;
  let clientLinkedin = "77uua4ca6s850x";
  let found = false;
  let hidden = false;

  const [formState, toggleState] = useState(false);

  if (formState === true) {
    classActiveClose = "active";
  }

  if (formState === false) {
    classActiveClose = "";
  }
  if (auth.isAuthenticated) {
    for (var i = 0; i < likes.length; i++) {
      if (likes[i].user === this_user._id) {
        found = true;
        break;
      }
    }

    for (var i = 0; i < profile.hidden_post.length; i++) {
      if (profile.hidden_post[i].post === _id) {
        hidden = true;
        break;
      }
    }

    // If you are logged in you get redirected to /forum
  }

  const [displayThumbsUp, toggleThumbsUp] = useState(found);
  const [displaySettings, toggleSettings] = useState(true);

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };
  return hidden ? (
    <div>
      <div className="post-bar">
        <div className="post_topbar">
          <div className="usy-dt ">
            <h1>This post from {name} is hidden</h1>
          </div>
          <br />
          <a
            style={{ color: "#64a1c7", cursor: "pointer" }}
            onClick={() => {
              deleteHide(_id);
            }}
          >
            Click here to unhide
          </a>
        </div>
      </div>
    </div>
  ) : (
    <Fragment>
      <div>
        <div className="post-bar">
          <div className="post_topbar">
            <div className="usy-dt">
              <img
                src={avatar}
                alt=""
                style={{ height: "50px", width: "50px" }}
              />
              <div className="usy-name">
                <h3>{name}</h3>
                <span>
                  <img src="assets/images/clock.png" alt="" />
                  <TimeAgo datetime={date} locale="vi" />
                </span>
              </div>
            </div>
            {showActions && (
              <div className="ed-opts">
                <a
                  onClick={() => {
                    toggleSettings(!displaySettings);
                  }}
                  title=""
                  className="ed-opts-open"
                >
                  <i className="la la-ellipsis-v"></i>
                </a>
                <div style={{ color: "white" }}>
                  {!displaySettings
                    ? (classActive = "active")
                    : (classActive = "")}
                </div>
                <ul className={`ed-options ${classActive}`}>
                  {showActions && (
                    <Fragment>
                      {!auth.loading && user === auth.user._id && (
                        <li className="post_project">
                          <Link
                            to={`/edit-post?id=${_id}`}
                            title=""
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              localStorage.setItem(
                                "this_post",
                                JSON.stringify({ title, text, category, image })
                              );
                            }}
                          >
                            Edit Post
                          </Link>
                        </li>
                      )}
                      {!auth.loading && user === auth.user._id && (
                        <li className="post_project">
                          <a
                            onClick={(e) => deletePost(_id)}
                            title=""
                            style={{ cursor: "pointer" }}
                          >
                            Delete Post
                          </a>
                        </li>
                      )}
                      <li>
                        <a
                          onClick={() => {
                            hidePost(_id);
                            toggleSettings(!displaySettings);
                          }}
                          title=""
                          style={{ cursor: "pointer" }}
                        >
                          Hide
                        </a>
                      </li>
                    </Fragment>
                  )}

                  {!showActions && (
                    <Fragment>
                      <li className="">
                        <a title="" style={{ cursor: "pointer" }}>
                          Edit Post
                        </a>
                      </li>
                      <li className="">
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={(e) => deleteShare(_id, idShare)}
                          title=""
                        >
                          Delete Post
                        </a>
                      </li>
                    </Fragment>
                  )}

                  <li>
                    <Link to={`/report-post?id=${_id}`} title="">
                      Report Post
                    </Link>
                  </li>
                </ul>
              </div>
            )}
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
            {showActions && (
              <ul className="bk-links">
                <li>
                  <a
                    onClick={() => savePost(_id)}
                    title=""
                    style={{ cursor: "pointer" }}
                  >
                    <i className="la la-bookmark"></i>
                  </a>
                </li>

                <li>
                  <Link to={`/send-post-email?id=${_id}`} title="">
                    <i className="la la-envelope"></i>
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div className="job_descp">
            <h3>{title}</h3>
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
                {text}
              </ShowMoreText>
            </p>
            {showActions && (
              <SRLWrapper>
                <Postimage image={image} />
              </SRLWrapper>
            )}

            {!showActions && (
              <Gallereact
                images={image}
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
            )}

            <br />
            <ul className="skill-tags">
              <li>
                <a href="#" title="">
                  {category}
                </a>
              </li>
            </ul>
          </div>
          <div className="job-status-bar">
            <ul className="like-com">
              <li>
                {showActions && (
                  <Fragment>
                    {!displayThumbsUp ? (
                      <a
                        onClick={(e) => {
                          addLike(_id);
                          toggleThumbsUp(!displayThumbsUp);
                          notifyMe(`You liked the post of ${name}`);
                          notifyOtherUser(
                            `${profile.name} liked your "${title}" post `,
                            user
                          );
                        }}
                      >
                        <i
                          className="far fa-heart "
                          style={{ color: "#E15256" }}
                        ></i>{" "}
                      </a>
                    ) : (
                      <a
                        className="bounce-in-top"
                        onClick={(e) => {
                          removeLike(_id);
                          toggleThumbsUp(!displayThumbsUp);
                        }}
                      >
                        <i
                          className="fas fa-heart"
                          style={{ color: "#E15256" }}
                        ></i>{" "}
                      </a>
                    )}
                  </Fragment>
                )}

                <img
                  onClick={() => toggleState(!formState)}
                  style={{ cursor: "pointer" }}
                  src="assets/images/liked-img.png"
                  alt=""
                />
                <span
                  onClick={() => toggleState(!formState)}
                  style={{ cursor: "pointer" }}
                >
                  {likes.length}
                </span>
              </li>
              <li>
                <Link
                  to={`/this-post?id=${_id}`}
                  onClick={() => {
                    addViews(_id);
                  }}
                  className="com"
                >
                  <i className="fas fa-comment-alt"></i> Comment{" "}
                  {comments.length}
                </Link>
              </li>
            </ul>
            {showActions && (
              <Fragment>
                <a
                  onClick={() => {
                    sharePost(_id);
                  }}
                  className="com"
                >
                  <i class="fas fa-share"></i>
                </a>
                <a className="mr-2 com">
                  <FacebookButton
                    style={{ border: "transparent" }}
                    url={url}
                    appId={799023877678326}
                  >
                    <i
                      class="fab fa-facebook-f"
                      style={{ color: "#097EEB" }}
                    ></i>
                  </FacebookButton>
                </a>
                <a className="mr-2 com">
                  <LinkedInButton
                    style={{ border: "transparent" }}
                    url={url}
                    appId={clientLinkedin}
                  >
                    <i class="fab fa-linkedin" style={{ color: "#0A66C2" }}></i>
                  </LinkedInButton>
                </a>
              </Fragment>
            )}

            <a className="mr-2 ">
              <i className="fas fa-eye"></i>Views {views.length}
            </a>
          </div>
        </div>
      </div>
      {showActions && (
        <div className={`post-popup job_post ${classActiveClose}`}>
          <div className="post-project">
            <h3>People who liked this post</h3>
            <Likes_pop_up likes={likes} />
            <a onClick={() => toggleState(!formState)} title="">
              <i
                className="la la-times-circle-o"
                style={{ color: "#153b44" }}
              ></i>
            </a>
          </div>
        </div>
      )}
    </Fragment>
  );
};

Post_item.defaultProps = {
  showActions: true,
};

Post_item.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  sharePost: PropTypes.func.isRequired,
  addViews: PropTypes.func.isRequired,
  deleteShare: PropTypes.func.isRequired,
  savePost: PropTypes.func.isRequired,
  hidePost: PropTypes.func.isRequired,
  deleteHide: PropTypes.func.isRequired,
  notifyMe: PropTypes.func.isRequired,
  notifyOtherUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  addLike,
  removeLike,
  deletePost,
  sharePost,
  addViews,
  deleteShare,
  savePost,
  hidePost,
  deleteHide,
  notifyMe,
  notifyOtherUser,
})(Post_item);
