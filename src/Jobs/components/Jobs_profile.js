import React from 'react'
import AppliedCandidates from './AppliedCandidates'
import AppliedJobs from './AppliedJobs'
import ManageJobs from './ManageJobs'
import SavedJobs from './SavedJobs'

export const Jobs_profile = () => {
    return (
        <div  id="saved-jobs" style={{ float:"left",
            width: "101%",
            display: "block"}} >
            
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a
                        className="nav-link active"
                        id="mange-tab"
                        data-toggle="tab"
                        href="#mange"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                    >Manage Jobs</a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        id="saved-tab"
                        data-toggle="tab"
                        href="#saved"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                    >Saved Jobs</a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        id="contact-tab"
                        data-toggle="tab"
                        href="#applied"
                        role="tab"
                        aria-controls="applied"
                        aria-selected="false"
                    >Applied Jobs</a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        id="cadidates-tab"
                        data-toggle="tab"
                        href="#cadidates"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                    >Applied cadidates</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
               <ManageJobs/>
               <SavedJobs/>
               <AppliedJobs/>
                <AppliedCandidates/>
            </div>
        </div>
    )
}
