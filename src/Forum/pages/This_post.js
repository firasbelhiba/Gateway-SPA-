import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Loading_spinner } from "../../Shared/layouts/Loading_spinner";
import { getPost, addComment } from "../../actions/post";
import { Link, useLocation } from "react-router-dom";
import Post_item from "../components/Post_item";
import Comment_item from "../components/items/Comment_item";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const This_post = ({
  getPost,
  post: { post, loading },
  addComment,
  auth,
  profile: { profile },
}) => {
  let query = useQuery();

  useEffect(() => {
    getPost(query.get("id"));
  }, [getPost]);

  const [text, setText] = useState("");

  let thisUser = JSON.parse(localStorage.getItem("user"));

  return loading || post === null ? (
    <Loading_spinner />
  ) : (
    <Fragment>
      <div className="row">
        <div className="col-md-12">
          <div className="form_create">
            <Link to="/forum" className="btn">
              Back to forum
            </Link>
            <Post_item post={post} showActions={false} />
            <div className="posty">
              <div className="comment-section">
                <a href="#" className="plus-ic">
                  <i className="la la-plus"></i>
                </a>
                <div className="comment-sec">
                  <ul>
                    {post.comments.map((comment) => (
                      <Comment_item
                        key={comment._id}
                        comment={comment}
                        postId={post._id}
                      />
                    ))}
                  </ul>
                </div>
                <div className="post-comment">
                  <div className="cm_img">
                    <img
                      src={thisUser.avatar}
                      alt=""
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div className="comment_box">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        addComment({ text }, post._id);
                        setText("");
                      }}
                    >
                      <div className="d-flex flex-row">
                        <input
                          type="text"
                          placeholder="Post a comment"
                          onChange={(e) => setText(e.target.value)}
                        />
                        <button type="submit">Send</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

This_post.propTypes = {
  getPost: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getPost, addComment })(This_post);
