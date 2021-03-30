import React,{Fragment} from 'react'
import { MostViewedJobDetail } from '../components/MostViewedJobDetail'

export const MostViewedJobs = () => {
    return (
        <Fragment>
            <div className="widget widget-jobs">
                          <div className="sd-title">
                            <h3>Most Viewed This Week</h3>
                            <i className="la la-ellipsis-v" />
                          </div>
                          <div className="jobs-list">
                            <MostViewedJobDetail/>
                          </div>
                        </div>
        </Fragment>
    )
}
