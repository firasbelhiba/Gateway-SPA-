import React from "react";

const Post_forum2 = () => {
  return (
    <div class="post-popup job_post">
      <div class="post-project">
        <h3>Add a post</h3>
        <div class="post-project-fields">
          <form>
            <div class="row">
              <div class="col-lg-12">
                <input type="text" name="title" placeholder="Title" />
              </div>
              <div class="col-lg-12">
                <div class="inp-field">
                  <select>
                    <option>Category</option>
                    <option>Category 1</option>
                    <option>Category 2</option>
                    <option>Category 3</option>
                  </select>
                </div>
              </div>

              <div class="col-lg-12">
                <textarea
                  name="description"
                  placeholder="Description"
                ></textarea>
              </div>
              <input type="file" />
              <div class="col-lg-12">
                <ul>
                  <li>
                    <button class="active" type="submit" value="post">
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
          <i class="la la-times-circle-o"></i>
        </a>
      </div>
    </div>
  );
};

export default Post_forum2;
