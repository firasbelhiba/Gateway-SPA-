import React from "react";

const Post_item = () => {
  return (
    <div>
      <div class="post-bar">
        <div class="post_topbar">
          <div class="usy-dt">
            <img src="assets/images/resources/us-pic.png" alt="" />
            <div class="usy-name">
              <h3>John Doe</h3>
              <span>
                <img src="assets/images/clock.png" alt="" />3 min ago
              </span>
            </div>
          </div>
          <div class="ed-opts">
            <a href="#" title="" class="ed-opts-open">
              <i class="la la-ellipsis-v"></i>
            </a>
            <ul class="ed-options">
              <li>
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
        <div class="epi-sec">
          <ul class="descp">
            <li>
              <img src="assets/images/icon8.png" alt="" />
              <span>Epic Coder</span>
            </li>
            <li>
              <img src="assets/images/icon9.png" alt="" />
              <span>India</span>
            </li>
          </ul>
          <ul class="bk-links">
            <li>
              <a href="#" title="">
                <i class="la la-bookmark"></i>
              </a>
            </li>
            <li>
              <a href="#" title="">
                <i class="la la-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="job_descp">
          <h3>Senior Wordpress Developer</h3>
          <ul class="job-dt"></ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id
            magna sit amet...
            <a href="#" title="">
              view more
            </a>
          </p>
          <ul class="skill-tags">
            <li>
              <a href="#" title="">
                HTML
              </a>
            </li>
            <li>
              <a href="#" title="">
                PHP
              </a>
            </li>
            <li>
              <a href="#" title="">
                CSS
              </a>
            </li>
            <li>
              <a href="#" title="">
                Javascript
              </a>
            </li>
            <li>
              <a href="#" title="">
                Wordpress
              </a>
            </li>
          </ul>
        </div>
        <div class="job-status-bar">
          <ul class="like-com">
            <li>
              <a href="#">
                <i class="fas fa-heart"></i> Like
              </a>
              <img src="assets/images/liked-img.png" alt="" />
              <span>25</span>
            </li>
            <li>
              <a href="#" class="com">
                <i class="fas fa-comment-alt"></i> Comment 15
              </a>
            </li>
          </ul>
          <a href="#">
            <i class="fas fa-eye"></i>Views 50
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post_item;
