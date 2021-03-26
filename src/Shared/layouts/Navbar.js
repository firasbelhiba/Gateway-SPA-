import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {

  const authLinks = (
    <ul>
      <li>
        <a onClick={logout} to="#!" title="" style={{ color: 'white' }}>
          Logout
      </a>
      </li>
    </ul>
  );


  const visitorLinks = (
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
    </ul>);

  return (
    <Fragment>
      {!isAuthenticated && <Redirect to='/signin' />}
      <header>
        <div className="container">
          <div className="header-data">
            <div className="logo pd-btm">
              <Link to="/" title="">
                <img
                  src="assets/images/Logofornav.png"
                  className="logofornav"
                  alt=""
                />
              </Link>
            </div>
            <div className="login_register">
              {!loading && (<Fragment>{isAuthenticated ? authLinks : visitorLinks}</Fragment>)}
            </div>
            <div className="search-bar st2 " style={{ width: "180px" }}>
              <form>
                <input type="text" name="search" placeholder="Search..." />
                <button type="submit">
                  <i className="la la-search"></i>
                </button>
              </form>
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
                  <Link to="/forum" title="">
                    <span><a className="far fa-address-card"></a></span>
                    Forum
                  </Link>
                </li>
                <li>
                  <Link to="index.html" title="">
                    <span>
                      <a className="far fa-question-circle"></a>
                    </span>
                    Q&A
                  </Link>
                </li>
                <li>
                  <Link to="jobs.html" title="">
                    <span>
                      <img src="assets/images/icon5.png" alt="" />
                    </span>
                    Jobs
                  </Link>
                </li>

                <li>
                  <Link to="jobs.html" title="">
                    <span>
                      <a className="fa fa-user"></a>
                    </span>
                    Profiles
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})

export default connect(mapStateToProps, { logout })(Navbar);