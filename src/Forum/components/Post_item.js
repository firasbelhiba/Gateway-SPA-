import React, { Fragment } from "react";
import Moment from "react-moment";

const Post_item = (props) => {
  const posts = props.posts.map((item) => (
    <div key={item._id}>
      <div className="post-bar">
        <div className="post_topbar">
          <div className="usy-dt">
            <img
              src={item.avatar}
              alt=""
              style={{ height: "50px", width: "50px" }}
            />
            <div className="usy-name">
              <h3>{item.name}</h3>
              <span>
                <img src="assets/images/clock.png" alt="" />
                <Moment format="YYYY/MM/DD">{item.date}</Moment>
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
          <h3>Senior Wordpress Developer</h3>
          <ul className="job-dt"></ul>
          <p>
            {item.text}
            <a href="#" title="">
              view more
            </a>
          </p>

          <img src="assets/images/career.png" style={divStyle} />
          <br />
          <ul className="skill-tags">
            <li>
              <a href="#" title="">
                {item.category}
              </a>
            </li>
          </ul>
        </div>
        <div className="job-status-bar">
          <ul className="like-com">
            <li>
              <a href="#">
                <i className="fas fa-heart"></i> Like
              </a>
              <img src="assets/images/liked-img.png" alt="" />
              <span>{item.likes.length}</span>
            </li>
            <li>
              <a href="#" className="com">
                <i className="fas fa-comment-alt"></i> Comment{" "}
                {item.comments.length}
              </a>
            </li>
          </ul>
          <a href="#">
            <i className="fas fa-eye"></i>Views 50
          </a>
        </div>
      </div>
    </div>
  ));
  return <Fragment>{posts}</Fragment>;
};

const divStyle = {
  display: "block",
  marginleft: "auto",
  marginright: "auto",
  padding: "10px",
  width: "100%",
};

export default Post_item;
