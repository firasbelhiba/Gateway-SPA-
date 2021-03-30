import React,{Fragment} from 'react';
import { Job } from './Job';


export const JobPosts = () => {
    return (
        <Fragment>
             <div className="col-lg-6">
                      <div className="main-ws-sec">
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


