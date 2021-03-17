import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <Fragment>
            <header>
                <div class="container">
                    <div class="header-data">
                        <div class="logo pd-btm">
                            <Link to="/" title=""
                            ><img src="assets/images/Logofornav.png" class="logofornav" alt=""
                                /></Link>
                        </div>
                        <div class="login_register">
                            <ul>
                                <li><Link to="/signup" title="">Register</Link></li>
                                <li><Link to="/signin" title="">Login</Link></li>
                            </ul>
                        </div>
                        <div class="search-bar st2 " style={{ width: "182px" }}>
                            <form>
                                <input type="text" name="search" placeholder="Search..." />
                                <button type="submit"><i class="la la-search"></i></button>
                            </form>
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




                    </div>
                </div>

            </header>
        </Fragment>
    )
}

