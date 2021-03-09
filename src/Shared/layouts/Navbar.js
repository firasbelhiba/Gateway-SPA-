import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <Fragment>
            <header>
                <div className="container">
                    <div className="header-data">
                        <div className="logo mb-1">
                            <Link to="/" title=""
                            ><img src="assets/images/Logofornav.png" class="logofornav" alt=""
                                /></Link>
                        </div>
                        <div className="search-bar">
                            {/* This is the place of the search bar  */}
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/" title="">
                                        <span><img src="assets/images/icon1.png" alt="" /></span>
                    Home
                  </Link>
                                </li>
                                <li>
                                    <Link to="index.html" title="">
                                        <span><a class="far fa-address-card"></a></span>
                    Forum
                  </Link>
                                </li>
                                <li>
                                    <Link to="index.html" title="">
                                        <span><a class="far fa-question-circle"></a></span>
                    Q&A
                  </Link>
                                </li>
                                <li>
                                    <Link to="jobs.html" title="">
                                        <span><img src="assets/images/icon5.png" alt="" /></span>
                    Jobs
                  </Link>
                                </li>

                                <li>
                                    <Link to="jobs.html" title="">
                                        <span><a class="fa fa-user"></a></span>
                    Profiles
                  </Link>
                                </li>

                            </ul>
                        </nav>

                        {/* <div className="user-account">
                            <div className="user-info">

                                <Link to="/signup" title="">Sign Up</Link>
                                <Link to="/signin" title="">Sign In</Link>
                            </div>
                        </div> */}
                        <div class="menu-btn">
                            <a href="#" title=""><i class="fa fa-bars"></i></a>
                        </div>
                        <div class="user-account">
                            <div class="user-info">
                                <img src="images/resources/user.png" alt="" />
                                <a href="#" title="">Authenticate</a>
                                <i class="la la-sort-down"></i>
                            </div>
                            <div class="user-account-settingss" id="users">


                                <ul class="us-links">
                                    <li><Link to="/signup" title="">Sign Up</Link></li>
                                    <li><Link to="/signin" title="">Sign In</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </Fragment>
    )
}

