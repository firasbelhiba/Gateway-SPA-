import React,{Fragment} from 'react'
import { TopJobDetail } from '../components/TopJobDetail'

export const TopJobs = () => {
    return (
        <Fragment>
         <div className="widget widget-jobs">
                          <div className="sd-title">
                            <h3>Top Jobs</h3>
                            <i className="la la-ellipsis-v" />
                          </div>
                          <div className="jobs-list">
                              <TopJobDetail/>
                          </div>
                        </div>   
        </Fragment>
    )
}
