import React, { Fragment, useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loading_spinner } from "../../Shared/layouts/Loading_spinner";
import { getPost } from "../../actions/post";
import { Link, useLocation } from "react-router-dom";
import Post_item from "../components/Post_item";
import Comment_section from "../components/Comment_section";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}


const This_post = ({ getPost, post: { post, loading } }) => {
  let query = useQuery();


  useEffect(() => {
    getPost(query.get("id"));
  }, [getPost]);
  return loading || post === null ? <Loading_spinner /> :
    <Fragment>
      <div className="row">
        <div className="col-md-12">
          <form className="form_create" >
            <Link to="/forum" className="btn">Back to forum</Link>
            <Post_item post={post} showActions={false} />
            <Comment_section />
          </form>
        </div>
      </div>
      {/* {post.name}
      {' '}
      {post.text}
      <Post_item post={post} /> */}
    </Fragment>;
};


This_post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps, { getPost })(This_post);
