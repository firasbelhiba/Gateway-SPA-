import React, { Fragment, useEffect } from "react";
import Suggestions from "../components/Suggestions";
import User_data from "../components/User_data";
import Tags from "../components/Tags";
import Forum_header from "../components/Forum_header";
import Post_item from "../components/Post_item";
import Top_profiles from "../components/Top_profiles";
import Widget_sign_up from "../components/Widget_sign_up";
import Top_jobs from "../components/Top_jobs";
import Most_viewed from "../components/Most_viewed";
import Most_viewed_people from "../components/Most_viewed_people";
import Post_form from "../components/Form/Post_form";
import Post_forum2 from "../components/Form/Post_forum2";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import PropTypes from "prop-types";
import { Loading_spinner } from "../../Shared/layouts/Loading_spinner";
import Filters from "../components/Filters";

const Forum = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Loading_spinner />
  ) : (
    <Fragment>
      <body oncontextmenu="return false;">
        <div className="wrapper">
          <main>
            <div className="main-section">
              <div className="container">
                <div className="main-section-data">
                  <div className="row">
                    <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                      <div className="main-left-sidebar no-margin">
                        <User_data />
                        <Suggestions />
                        <Tags />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 no-pd">
                      <div className="main-ws-sec">
                        <Forum_header />
                        {posts.map((item) => (
                          <Post_item post={item} />
                        ))}
                        <Top_profiles />
                      </div>
                    </div>
                    <div className="col-lg-3 pd-right-none no-pd">
                      <div className="right-sidebar">
                        <Widget_sign_up />
                        <Filters />
                        <Top_jobs />
                        <Most_viewed />
                        <Most_viewed_people />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Post_form />
          <Post_forum2 />
        </div>
      </body>
    </Fragment>
  );
};

Forum.prototype = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPosts })(Forum);
