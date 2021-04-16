import React, { Fragment, useState } from "react";
import Moment from "react-moment";
import { addLike, removeLike, deletePost } from "../../actions/post";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { sharePost, deleteShare } from "../../actions/profile";
import { addViews } from "../../actions/post";
import { FacebookButton, LinkedInButton } from "react-social";
import ShowMoreText from "react-show-more-text";
import { SRLWrapper } from "simple-react-lightbox";
import Gallereact from "gallereact";
import Postimage from "./items/Postimage";

const Post_item = ({
  addLike,
  removeLike,
  deletePost,
  sharePost,
  addViews,
  idShare,
  deleteShare,
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
  let url = `https://gateway.com/api/posts/this-post?id=${_id}`;
  let clientLinkedin = "77uua4ca6s850x";

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  const elements = [
    {
      src: "https://my/image.jpg",
      caption: "Lorem ipsum dolor sit amet",
      width: 1920,
      height: "auto",
    },
    {
      src: "https://my/second-image.jpg",
      thumbnail: "https://my/second-image-thumbnails.jpg",
      caption: "Commodo commodo dolore",
      width: 1024,
      height: "auto",
    },
    {
      src: "https://vimeo.com/458698330",
      thumbnail:
        "https://www.simple-react-lightbox.dev/docs/gallery/thumbnails/unsplash05.jpg",
      caption: "Vimeo video",
      autoplay: false,
      showControls: true,
    },
  ];
  const options = {
    settings: {
      overlayColor: "rgb(25, 136, 124)",
      autoplaySpeed: 1500,
      transitionSpeed: 900,
    },
    buttons: {
      backgroundColor: "#1b5245",
      iconColor: "rgba(126, 172, 139, 0.8)",
    },
    caption: {
      captionColor: "#a6cfa5",
      captionFontFamily: "Raleway, sans-serif",
      captionFontWeight: "300",
      captionTextTransform: "uppercase",
    },
  };
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
                {showActions && (
                  <Fragment>
                    {!auth.loading && user === auth.user._id && (
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
                    )}
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
                    <a
                      onClick={(e) => {
                        addLike(_id);
                        toggleThumbsUp(!displayThumbsUp);
                      }}
                    >
                      <i
                        className="fas fa-thumbs-up"
                        style={{ color: "grey" }}
                      ></i>{" "}
                    </a>
                    <a
                      onClick={(e) => {
                        removeLike(_id);
                        toggleThumbsDown(!displayThumbsDown);
                      }}
                    >
                      <i
                        className="fas fa-thumbs-down"
                        style={{ color: "grey" }}
                      ></i>{" "}
                    </a>
                  </Fragment>
                )}

                <img src="assets/images/liked-img.png" alt="" />
                <span>{likes.length}</span>
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
})(Post_item);
