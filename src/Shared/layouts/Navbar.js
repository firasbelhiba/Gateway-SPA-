import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {

  const [displayDropDown, toggleDropDown] = useState(false);

  const notification = (
    <li>
      <Link to="#" title="" class="not-box-open">
        <span>
          <img src="assets/images/icon7.png" alt="" />
        </span>
      Notification
    </Link>
      <div class="notification-box noti" id="notification">
        <div class="nt-title">
          <h4>Setting</h4>
          <Link to="#" title="">
            Clear all
        </Link>
        </div>
        <div class="nott-list">
          <div class="notfication-details">
            <div class="noty-user-img">
              <img
                src="assets/images/resources/ny-img1.png"
                alt=""
              />
            </div>
            <div class="notification-info">
              <h3>
                <Link to="#" title="">
                  Jassica William
              </Link>{" "}
              Comment on your project.
            </h3>
              <span>2 min ago</span>
            </div>
          </div>
          <div class="notfication-details">
            <div class="noty-user-img">
              <img
                src="assets/images/resources/ny-img2.png"
                alt=""
              />
            </div>
            <div class="notification-info">
              <h3>
                <Link to="#" title="">
                  Jassica William
              </Link>{" "}
              Comment on your project.
            </h3>
              <span>2 min ago</span>
            </div>
          </div>
          <div class="notfication-details">
            <div class="noty-user-img">
              <img
                src="assets/images/resources/ny-img3.png"
                alt=""
              />
            </div>
            <div class="notification-info">
              <h3>
                <Link to="#" title="">
                  Jassica William
              </Link>{" "}
              Comment on your project.
            </h3>
              <span>2 min ago</span>
            </div>
          </div>
          <div class="notfication-details">
            <div class="noty-user-img">
              <img
                src="assets/images/resources/ny-img2.png"
                alt=""
              />
            </div>
            <div class="notification-info">
              <h3>
                <Link to="#" title="">
                  Jassica William
              </Link>{" "}
              Comment on your project.
            </h3>
              <span>2 min ago</span>
            </div>
          </div>
          <div class="view-all-nots">
            <Link to="#" title="">
              View All Notification
          </Link>
          </div>
        </div>
      </div>
    </li>
  );

  const authLinks = (

    <Fragment>
      <div class="menu-btn">
        <Link to="" title="">
          <i class="fa fa-bars"></i>
        </Link>
      </div>
      <div class="user-account">
        <div class="user-info">
          <img src="assets/images/resources/user.png" alt="" />
          <Link to="" title="">
            John
        </Link>
          <i class="la la-sort-down"></i>
        </div>
        <div class="user-account-settingss" id="users">
          <h3>Online Status</h3>
          <ul class="on-off-status">
            <li>
              <div class="fgt-sec">
                <input type="radio" name="cc" id="c5" />
                <label for="c5">
                  <span></span>
                </label>
                <small>Online</small>
              </div>
            </li>
            <li>
              <div class="fgt-sec">
                <input type="radio" name="cc" id="c6" />
                <label for="c6">
                  <span></span>
                </label>
                <small>Offline</small>
              </div>
            </li>
          </ul>

          <h3>Setting</h3>
          <ul class="us-links">
            <li>
              <Link to="profile-account-setting.html" title="">
                Account Setting
            </Link>
            </li>
            <li>
              <Link to="" title="">
                Privacy
            </Link>
            </li>
            <li>
              <Link to="" title="">
                Faqs
            </Link>
            </li>
            <li>
              <Link to="" title="">
                Terms & Conditions
            </Link>
            </li>
          </ul>
          <h3 class="tc">
            <Link to="sign-in.html" title="">
              Logout
          </Link>
          </h3>
        </div>
      </div>
    </Fragment>
  );

  const visitorLinks = (
    <Fragment>
      <div className="login_register">
        <ul>
          <li>
            <Link to="/signup" title="">
              Register
          </Link>
          </li>
          <li>
            <Link to="/signin" title="">
              Login
          </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <header>
        <div class="container">
          <div class="header-data">
            <div class="logo">
              <Link to="index.html" title="">
                <img src="assets/images/logo.png" alt="" />
              </Link>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/" title="">
                    <span>
                      <img src="assets/images/icon1.png" alt="" />
                    </span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="#" title="">
                    <span>
                      <i className="far fa-question-circle"></i>
                    </span>
                    Q&A
                  </Link>
                  <ul>
                    <li>
                      <Link to="companies.html" title="">
                        Question Section
                      </Link>
                    </li>
                    <li>
                      <Link to="company-profile.html" title="">
                        Question Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/forum" title="">
                    <span>
                      <i className="far fa-address-card"></i>
                    </span>
                    Forum
                  </Link>
                </li>
                <li>
                  <Link to="/profiles" title="">
                    <span>
                      <img src="assets/images/icon4.png" alt="" />
                    </span>
                    Profiles
                  </Link>
                  {/* <ul>
                    <li>
                      <Link to="user-profile.html" title="">
                        User Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="my-profile-feed.html" title="">
                        my-profile-feed
                      </Link>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <Link to="/jobs" title="">
                    <span>
                      <img src="assets/images/icon5.png" alt="" />
                    </span>
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link to="/messages" title="" class="not-box-openm">
                    <span>
                      <img src="assets/images/icon6.png" alt="" />
                    </span>
                    Messages
                  </Link>
                  <div class="notification-box msg" id="message">
                    <div class="nt-title">
                      <h4>Setting</h4>
                      <Link to="#" title="">
                        Clear all
                      </Link>
                    </div>
                    <div class="nott-list">
                      <div class="notfication-details">
                        <div class="noty-user-img">
                          <img
                            src="assets/images/resources/ny-img1.png"
                            alt=""
                          />
                        </div>
                        <div class="notification-info">
                          <h3>
                            <Link to="messages.html" title="">
                              Jassica William
                            </Link>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do.
                          </p>
                          <span>2 min ago</span>
                        </div>
                      </div>
                      <div class="notfication-details">
                        <div class="noty-user-img">
                          <img
                            src="assets/images/resources/ny-img2.png"
                            alt=""
                          />
                        </div>
                        <div class="notification-info">
                          <h3>
                            <Link to="messages.html" title="">
                              Jassica William
                            </Link>
                          </h3>
                          <p>Lorem ipsum dolor sit amet.</p>
                          <span>2 min ago</span>
                        </div>
                      </div>
                      <div class="notfication-details">
                        <div class="noty-user-img">
                          <img
                            src="assets/images/resources/ny-img3.png"
                            alt=""
                          />
                        </div>
                        <div class="notification-info">
                          <h3>
                            <Link to="messages.html" title="">
                              Jassica William
                            </Link>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempo incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                          <span>2 min ago</span>
                        </div>
                      </div>
                      <div class="view-all-nots">
                        <Link to="messages.html" title="">
                          View All Messsages
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                {isAuthenticated && notification}

              </ul>
            </nav>
            {isAuthenticated ? authLinks : visitorLinks}
          </div>
        </div>
      </header>
    </Fragment>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
