import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPost } from "../../../actions/post";

const Post_forum2 = ({ addPost }) => {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    category: "",
  });

  const { title, text, category } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
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
              value={title}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="col-lg-12">
            <div className="inp-field">
              <select
                value={category}
                name="category"
                onChange={(e) => onChange(e)}
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
              value={text}
              onChange={(e) => onChange(e)}
            ></textarea>
          </div>
          <input type="file" />
          <div className="col-lg-12">
            <ul>
              <li>
                <button className="active" type="submit">
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
  );
};

Post_forum2.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(Post_forum2);
