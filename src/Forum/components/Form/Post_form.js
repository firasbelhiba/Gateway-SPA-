import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updatePost } from "../../../actions/post";
import { useLocation } from "react-router-dom";
import { StepTitle } from "semantic-ui-react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Post_form = ({ post: { post, loading }, updatePost, history }) => {
  let thisPost = JSON.parse(localStorage.getItem("this_post"));
  const [title, setTitle] = useState(thisPost.title);
  const [text, setText] = useState(thisPost.text);
  const [category, setCategory] = useState(thisPost.category);
  console.log(thisPost.title);
  let query = useQuery();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("text", text);
    data.append("category", category);

    updatePost(title, text, category, query.get("id"), history);
  };

  return (
    <div className="post-project-fields">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="row">
          <div className="col-lg-12">
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="col-lg-12">
            <div className="inp-field">
              <select
                name="category"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option value="python">python</option>
                <option value="spring">spring</option>
                <option value="angular">angular</option>
                <option value=".net">.net</option>
              </select>
            </div>
          </div>

          <div className="col-lg-12">
            <textarea
              name="text"
              placeholder="Description"
              onChange={(e) => setText(e.target.value)}
              value={text}
            ></textarea>
          </div>
          <div className="fallback">
            {/* <input
              type="file"
              onChange={(e) => setImage(e.target.files)}
              multiple
            /> */}
          </div>
          <div className="col-lg-12">
            <ul>
              <li>
                <button className="active" type="submit">
                  Update
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
  );
};
Post_form.propTypes = {
  updatePost: PropTypes.func.isRequired,

  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { updatePost })(Post_form);
