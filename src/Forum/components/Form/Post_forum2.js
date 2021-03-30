import React from "react";

const Post_forum2 = () => {
  return (
    <div className="post-popup job_post">
      <div className="post-project">
        <h3>Add a post</h3>
        <div className="post-project-fields">
          <form>
            <div className="row">
              <div className="col-lg-12">
                <input type="text" name="title" placeholder="Title" />
              </div>
              <div className="col-lg-12">
                <div className="inp-field">
                  <select>
                    <option>Category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-12">
                <textarea
                  name="description"
                  placeholder="Description"
                ></textarea>
              </div>
              <input type="file" />
              <div className="col-lg-12">
                <ul>
                  <li>
                    <button className="active" type="submit" value="post">
                      Post
                    </button>
                  </li>
                  <li>
                    <a href="#" title="">
                      Cancel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
        <a href="#" title="">
          <i className="la la-times-circle-o"></i>
        </a>
      </div>
    </div>
  );
};

export default Post_forum2;
