import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPost } from "../../../actions/post";
import { toast } from "react-toastify";

const Post_forum2 = ({ addPost, disable, country, city }) => {
  const [title, setTite] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" && text === "" && category === "") {
      toast.error("Fill the fields and save !", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } else if (title === "") {
      toast.error("Title is required !", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } else if (text === "") {
      toast.error("Description is required !", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } else if (category === "") {
      toast.error("Category is required !", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } else {
      const data = new FormData();
      data.append("title", title);
      data.append("text", text);
      data.append("category", category);
      data.append("location", country + "," + city);

      for (let i = 0; i < image.length; i++) {
        data.append("image", image[i]);
      }

      addPost(data);
      toast.success("Post added successfully!!", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  return (
    <div className="post-project-fields">
      <form className="dropzone" onSubmit={(e) => onSubmit(e)}>
        <div className="row">
          <div className="col-lg-12">
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={(e) => setTite(e.target.value)}
            />
          </div>
          <div className="col-lg-12">
            <div className="inp-field">
              <select
                name="category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select a Category</option>
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
            ></textarea>
          </div>
          <div className="fallback">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files)}
              multiple
            />
          </div>
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
