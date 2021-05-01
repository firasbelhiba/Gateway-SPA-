import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updatePost } from "../../../actions/post";
import { useLocation } from "react-router-dom";
import { StepTitle } from "semantic-ui-react";
import { toast } from "react-toastify";
import { Loading_spinner } from "../../../Shared/layouts/Loading_spinner";
import Image_item from "../items/Image_item";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Post_form = ({ post: { post, loading }, updatePost, history }) => {
  let thisPost = JSON.parse(localStorage.getItem("this_post"));

  const [isClikced, setIsclicked] = useState(false);

  const [title, setTitle] = useState(thisPost.title);
  const [text, setText] = useState(thisPost.text);
  const [category, setCategory] = useState(thisPost.category);
  const [image, setImage] = useState("");

  let listOfLastImages = [];
  for (let i = 0; i < thisPost.image.length; i++) {
    listOfLastImages.push(thisPost.image[i]);
  }

  console.log(listOfLastImages);

  console.log(thisPost.title);
  let query = useQuery();

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
      setIsclicked(true);
      const data = new FormData();
      data.append("title", title);
      data.append("text", text);
      data.append("category", category);

      for (let i = 0; i < image.length; i++) {
        data.append("image", image[i]);
      }

      updatePost(data, query.get("id"), history);
      toast.success("Post updated successfully!!", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
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
              value={text}
            ></textarea>
          </div>
          <div className="fallback">
            <input
              type="file"
              onChange={(e) => setImage(e.target.files)}
              multiple
              id="file"
              style={{ display: "none" }}
            />
          </div>

          {listOfLastImages.map((link) => (
            <Image_item link={link} />
          ))}
          <div className="col-lg-12">
            <ul>
              <li>
                <label htmlFor="file">
                  <i
                    class="fas fa-camera-retro fa-3x"
                    style={{ cursor: "pointer" }}
                  ></i>
                </label>
              </li>
              {!isClikced ? (
                <li>
                  <button className="active" type="submit">
                    Update
                  </button>
                </li>
              ) : (
                <Loading_spinner />
              )}
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
