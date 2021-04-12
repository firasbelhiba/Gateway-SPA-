import React, { Fragment, useState } from "react";
import Moment from "react-moment";
import { addLike, removeLike, deletePost } from "../../actions/post";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Comment_section from "./Comment_section";

const Post_item = ({
  addLike,
  removeLike,
  deletePost,
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
  // const currentUserLike = likes.map((like) => {
  //   let likeState = false;

  //   if (like.user === auth.user._id) {
  //     likeState=true;
  //     return likeState;
  //   }
  // });

  const [displayThumbsUp, toggleThumbsUp] = useState(false);
  const [displayThumbsDown, toggleThumbsDown] = useState(false);
  const [displaySettings, toggleSettings] = useState(true);

  let classActive = "";

  return (
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
                  <Moment format="YYYY/MM/DD">{date}</Moment>
                </span>
              </div>
            </div>
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
                {/* {!auth.loading && user === auth.user._id && (
                  <li className="post_project">
                    <a href="#" title="">
                      Edit Post
                    </a>
                  </li>
                )}
                {!auth.loading && user === auth.user._id && (
                  <li className="post_project">
                    <a onClick={(e) => deletePost(_id)} title="">
                      Delete Post
                    </a>
                  </li>
                )} */}
                <li>
                  <Link to={`/report-post?id=${_id}`} title="">
                    Report Post
                  </Link>
                </li>
                <li>
                  <a href="#" title="">
                    Hide
                  </a>
                </li>
              </ul>
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
            <ul className="bk-links">
              <li>
                <a href="#" title="">
                  <i className="la la-bookmark"></i>
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <i className="la la-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="job_descp">
            <h3>{title}</h3>
            <ul className="job-dt"></ul>
            <p>
              {text}
              <a href="#" title="">
                view more
              </a>
            </p>

            <img src={image} style={divStyle} />
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
                    <a
                      onClick={(e) => {
                        addLike(_id);
                        toggleThumbsUp(!displayThumbsUp);
                      }}
                    >
                      <i
                        className="far fa-thumbs-up"
                        style={{ color: "#153b44" }}
                      ></i>{" "}
                    </a>
                    <a
                      onClick={(e) => {
                        removeLike(_id);
                        toggleThumbsDown(!displayThumbsDown);
                      }}
                    >
                      <i
                        className="far fa-thumbs-down"
                        style={{ color: "#153b44" }}
                      ></i>{" "}
                    </a>
                  </Fragment>
                )}

                <img src="assets/images/liked-img.png" alt="" />
                <span>{likes.length}</span>
              </li>
              <li>
                <Link to={`/this-post?id=${_id}`} className="com">
                  <i className="fas fa-comment-alt"></i> Comment{" "}
                  {comments.length}
                </Link>
              </li>
            </ul>
            <a href="#">
              <i className="fas fa-eye"></i>Views {views.length}
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const divStyle = {
  display: "block",
  marginleft: "auto",
  marginright: "auto",
  padding: "10px",
  width: "100%",
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
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  Post_item
);
