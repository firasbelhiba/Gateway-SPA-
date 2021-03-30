import React,{Fragment} from 'react';
import { Job } from './Job';
import { Link } from 'react-router-dom'


export const JobPosts = () => {
    return (
        <Fragment>
             <div className="col-lg-6">
                      <div className="main-ws-sec">
                      <div class="post-topbar">
                        <div class="user-picy">
                          <img src="assets/images/resources/user-pic.png" alt="" />
                       </div>
               <div class="post-st">
                <ul>
             {/* <li>
                   <Link class="post_project" to="#" title="">
                    Post a Project
                    </Link>
                    </li> */}
                        <li>
                          <Link class="post-jb active" to="#" title="">
                           Add Job
                           </Link>
                         </li>
                  </ul>
                </div>
                    </div>
                        <div className="posts-section">
                             <Job/> 
                          <div className="process-comm">
                            <div className="spinner">
                              <div className="bounce1" />
                              <div className="bounce2" />
                              <div className="bounce3" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
        </Fragment>
    )
}


