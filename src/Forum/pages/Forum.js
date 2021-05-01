import React, { Fragment, useEffect, useState } from "react";
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
import Alert from "../../Shared/layouts/Alert";
import { getCurrentProfile } from "../../actions/profile";
import SimpleReactLightbox from "simple-react-lightbox";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Top_tanitjobs from "../components/Top_tanitjobs";
import Suggestions_friends from "../../Profile/components/Suggestions_friends";

let classActive = "";
export const disable = () => {
  classActive = "";
};

const Forum = ({
  getPosts,
  post: { posts, loading },
  profile = { profile },
}) => {
  useEffect(() => {
    getPosts();
    getCurrentProfile();
  }, [getPosts, getCurrentProfile]);

  let thisProfile = JSON.parse(localStorage.getItem("profile"));

  const [formState, toggleState] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchDate, setDate] = useState("");
  const [searchSort, setSort] = useState("");

  if (formState === "add") {
    classActive = "active";
  }

  if (formState === "") {
    classActive = "";
  }

  let currentDate = new Date();

  function compareLikes(a, b) {
    if (a.likes.length < b.likes.length) {
      return 1;
    }
    if (a.likes.length > b.likes.length) {
      return -1;
    }
    return 0;
  }
  function compareComments(a, b) {
    if (a.comments.length < b.comments.length) {
      return 1;
    }
    if (a.comments.length > b.comments.length) {
      return -1;
    }
    return 0;
  }

  return loading ? (
    <Loading_spinner />
  ) : (
    <Fragment>
      <body oncontextmenu="return false;">
        <div className={formState === "add" ? "wrapper overlay" : "wrapper"}>
          <main>
            <div className="main-section">
              <div className="container">
                <div className="main-section-data">
                  <div className="row">
                    <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                      <div className="main-left-sidebar no-margin">
                        <User_data thisProfile={thisProfile} />
                        <Suggestions_friends />
                        <Top_tanitjobs />
                        <Tags />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 no-pd">
                      <div className="main-ws-sec">
                        <div className="post-topbar">
                          <div className="user-picy">
                            <img
                              src={thisProfile.avatar}
                              alt=""
                              style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                              }}
                            />
                          </div>
                          <div className="post-st">
                            <ul>
                              <li>
                                <a
                                  onClick={() => toggleState("add")}
                                  className="post-jb active"
                                  title=""
                                  style={{ cursor: "pointer" }}
                                >
                                  Add post
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        {posts
                          .filter((val) => {
                            if (searchCategory === "") return val;
                            else if (
                              val.category
                                .toLowerCase()
                                .includes(searchCategory.toLowerCase())
                            )
                              return val;
                          })
                          .filter((val) => {
                            if (searchDate === "") return val;
                            else if (
                              searchDate === "today" &&
                              val.date.substr(8, 2) ===
                                currentDate.toString().substr(8, 2)
                            )
                              return val;
                            else if (
                              searchDate === "month" &&
                              parseInt(val.date.substr(5, 2).toString(), 10) ===
                                currentDate.getMonth() + 1
                            )
                              return val;
                            else if (
                              searchDate === "year" &&
                              val.date.substr(0, 4).toString() ===
                                currentDate.getFullYear().toString()
                            )
                              return val;
                          })
                          .sort((a, b) => {
                            if (
                              searchSort === "Sort by views" &&
                              a.views.length < b.views.length
                            ) {
                              return 1;
                            }
                            if (
                              searchSort === "Sort by views" &&
                              a.views.length > b.views.length
                            ) {
                              return -1;
                            }
                            return 0;
                          })
                          .sort((a, b) => {
                            if (
                              searchSort === "Sort by likes" &&
                              a.likes.length < b.likes.length
                            ) {
                              return 1;
                            }
                            if (
                              searchSort === "Sort by likes" &&
                              a.likes.length > b.likes.length
                            ) {
                              return -1;
                            }
                            return 0;
                          })
                          .sort((a, b) => {
                            if (
                              searchSort === "Sort by comments" &&
                              a.comments.length < b.comments.length
                            ) {
                              return 1;
                            }
                            if (
                              searchSort === "Sort by comments" &&
                              a.comments.length > b.comments.length
                            ) {
                              return -1;
                            }
                            return 0;
                          })
                          .map((post) => (
                            <SimpleReactLightbox>
                              <Post_item key={post && post._id} post={post} />
                            </SimpleReactLightbox>
                          ))}

                        <Top_profiles />
                      </div>
                    </div>
                    <div className="col-lg-3 pd-right-none no-pd">
                      <div className="right-sidebar">
                        <Alert />
                        <div className="filter-secs">
                          <div className="filter-heading">
                            <h3>Filters</h3>
                            <a
                              onClick={() => {
                                setSearchCategory("");
                                setDate("");
                                setSort("");
                              }}
                              style={{ cursor: "pointer" }}
                              title=""
                            >
                              Clear all filters
                            </a>
                          </div>
                          <div className="paddy">
                            <div className="filter-dd">
                              <div className="filter-ttl">
                                <h3>Category</h3>
                                <a
                                  onClick={() => setSearchCategory("")}
                                  style={{ cursor: "pointer" }}
                                  title=""
                                >
                                  Clear
                                </a>
                              </div>
                              <form>
                                <input
                                  type="text"
                                  name="search-skills"
                                  placeholder="Search category"
                                  onChange={(e) => {
                                    setSearchCategory(e.target.value);
                                  }}
                                  value={searchCategory}
                                />
                              </form>
                            </div>
                            <div className="filter-dd">
                              <div className="filter-ttl">
                                <h3>Date post</h3>
                                <a
                                  onClick={() => setDate("")}
                                  style={{ cursor: "pointer" }}
                                  title=""
                                >
                                  Clear
                                </a>
                              </div>
                              <ul className="avail-checks">
                                <li>
                                  <input
                                    type="radio"
                                    name="cc"
                                    id="c1"
                                    onChange={(e) => {
                                      setDate("today");
                                    }}
                                    value={searchDate}
                                  />
                                  <label htmlFor="c1">
                                    <span></span>
                                  </label>
                                  <small>Today</small>
                                </li>
                                <li>
                                  <input
                                    type="radio"
                                    name="cc"
                                    id="c2"
                                    onChange={(e) => {
                                      setDate("week");
                                    }}
                                    value={searchDate}
                                  />
                                  <label htmlFor="c2">
                                    <span></span>
                                  </label>
                                  <small>This week</small>
                                </li>
                                <li>
                                  <input
                                    type="radio"
                                    name="cc"
                                    id="c3"
                                    onChange={(e) => {
                                      setDate("month");
                                    }}
                                    value={searchDate}
                                  />
                                  <label htmlFor="c3">
                                    <span></span>
                                  </label>
                                  <small>This month</small>
                                </li>
                                <li>
                                  <input
                                    type="radio"
                                    name="cc"
                                    id="c4"
                                    onChange={(e) => {
                                      setDate("year");
                                    }}
                                    value={searchDate}
                                  />
                                  <label htmlFor="c4">
                                    <span></span>
                                  </label>
                                  <small>This Year</small>
                                </li>
                              </ul>
                            </div>
                            <div className="filter-dd">
                              <div className="filter-ttl">
                                <h3>Sort by : </h3>
                                <a
                                  onClick={() => setSort("")}
                                  style={{ cursor: "pointer" }}
                                  title=""
                                >
                                  Clear
                                </a>
                              </div>
                              <form className="job-tp">
                                <select
                                  onChange={(e) => {
                                    setSort(e.target.value);
                                  }}
                                  value={searchSort}
                                >
                                  <option value="0">Choose a type</option>
                                  <option value="Sort by views">
                                    Sort by views
                                  </option>
                                  <option value="Sort by comments">
                                    Sort by comments
                                  </option>
                                  <option value="Sort by likes">
                                    Sort by likes
                                  </option>
                                </select>
                                <i
                                  className="fa fa-ellipsis-v"
                                  aria-hidden="true"
                                ></i>
                              </form>
                            </div>
                          </div>
                        </div>
                        <Top_jobs />
                        <Most_viewed posts={posts} />
                        <Most_viewed_people />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className={`post-popup job_post ${classActive}`}>
            <div className="post-project">
              <h3>Add post</h3>
              <Post_forum2 />
              <a onClick={() => toggleState("")} title="">
                <i
                  className="la la-times-circle-o"
                  style={{ color: "white" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </body>
    </Fragment>
  );
};

Forum.prototype = {
  post: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  profile: state.profile,
});
export default connect(mapStateToProps, { getPosts, getCurrentProfile })(Forum);
