import React, { Fragment, useState } from "react";
import Moment from "react-moment";
import { addLike, removeLike } from "../../actions/post";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Post_item = ({
  addLike,
  removeLike,
  post: {
    _id,
    title,
    text,
    name,
    avatar,
    user,
    likes,
    comments,
    date,
    views,
    category,
  },
  auth,
}) => {
  // const currentUserLike = likes.map((like) => {
  //   let likeState = false;

  //   if (like.user === auth.user._id) {
  //     likeState=true;
  //     return likeState;
  //   }
  // });
  const [displayHeart, toggleHeart] = useState(false);

  console.log(false);

  return (
    <Fragment>
      <div key={_id}>
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
              <a href="#" title="" className="ed-opts-open">
                <i className="la la-ellipsis-v"></i>
              </a>
              <ul className="ed-options ">
                <li className="post_project">
                  <a href="#" title="">
                    Edit Post
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Delete Post
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Report Post
                  </a>
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

            <img src="assets/images/career.png" style={divStyle} />
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
                <a onClick={(e) => addLike(_id)}>
                  <i className="far fa-heart"></i>{" "}
                  {displayHeart ? "Unlike" : "Like"}
                </a>
                <img src="assets/images/liked-img.png" alt="" />
                <span>{likes.length}</span>
              </li>
              <li>
                <a href="#" className="com">
                  <i className="fas fa-comment-alt"></i> Comment{" "}
                  {comments.length}
                </a>
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

Post_item.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike })(Post_item);
