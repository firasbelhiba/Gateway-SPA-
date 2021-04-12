import React from "react";

const Comment_section = () => {
  return (
    <div className="posty">
      <div className="comment-section">
        <a href="#" className="plus-ic">
          <i className="la la-plus"></i>
        </a>
        <div className="comment-sec">
          <ul>
            <li>
              <div className="comment-list">
                <div className="bg-img">
                  <img src="assets/images/resources/bg-img1.png" alt="" />
                </div>
                <div className="comment">
                  <h3>John Doe</h3>
                  <span>
                    <img src="assets/images/clock.png" alt="" /> 3 min ago
                  </span>
                  <p>Lorem ipsum dolor sit amet,</p>
                  <a href="#" title="" className="active">
                    <i className="fa fa-reply-all"></i>Reply
                  </a>
                </div>
              </div>
              <ul>
                <li>
                  <div className="comment-list">
                    <div className="bg-img">
                      <img src="assets/images/resources/bg-img2.png" alt="" />
                    </div>
                    <div className="comment">
                      <h3>John Doe</h3>
                      <span>
                        <img src="assets/images/clock.png" alt="" />3 min ago
                      </span>
                      <p>Hi John</p>
                      <a href="#" title="">
                        <i className="fa fa-reply-all"></i>Reply
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div className="comment-list">
                <div className="bg-img">
                  <img src="assets/images/resources/bg-img3.png" alt="" />
                </div>
                <div className="comment">
                  <h3>John Doe</h3>
                  <span>
                    <img src="assets/images/clock.png" alt="" /> 3 min ago
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam luctus hendrerit metus, ut ullamcorper quam finibus
                    at.
                  </p>
                  <a href="#" title="">
                    <i className="fa fa-reply-all"></i>Reply
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="post-comment">
          <div className="cm_img">
            <img src="assets/images/resources/bg-img4.png" alt="" />
          </div>
          <div className="comment_box">
            <form>
              <input type="text" placeholder="Post a comment" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment_section;
