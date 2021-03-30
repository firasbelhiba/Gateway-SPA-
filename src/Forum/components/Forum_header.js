import React from "react";
import { Link } from "react-router-dom";

const Forum_header = () => {
  return (
    <div className="post-topbar">
      <div className="user-picy">
        <img src="assets/images/resources/user-pic.png" alt="" />
      </div>
      <div className="post-st">
        <ul>
          {/* <li>
            <Link className="post_project" to="#" title="">
              Post a Project
            </Link>
          </li> */}
          <li>
            <Link className="post-jb active" to="#" title="">
              Add post
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Forum_header;
