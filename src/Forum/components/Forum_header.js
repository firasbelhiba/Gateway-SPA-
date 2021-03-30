import React from "react";
import { Link } from "react-router-dom";

const Forum_header = () => {
  return (
    <div class="post-topbar">
      <div class="user-picy">
        <img src="assets/images/resources/user-pic.png" alt="" />
      </div>
      <div class="post-st">
        <ul>
          {/* <li>
            <Link class="post_project" to="#" title="">
              Post a Project
            </Link>
          </li> */}
          <li>
            <Link class="post-jb active" to="#" title="">
              Add post
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Forum_header;
