import React from "react";

const Most_viewed = () => {
  return (
    <div>
      <div className="widget widget-jobs">
        <div className="sd-title">
          <h3>Most Viewed This Week</h3>
          <i className="la la-ellipsis-v"></i>
        </div>
        <div className="jobs-list">
          <div className="job-info">
            <div className="job-details">
              <h3>Senior Product Designer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
            </div>
            <div className="hr-rate">
              <span>$25/hr</span>
            </div>
          </div>
          <div className="job-info">
            <div className="job-details">
              <h3>Senior UI / UX Designer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
            </div>
            <div className="hr-rate">
              <span>$25/hr</span>
            </div>
          </div>
          <div className="job-info">
            <div className="job-details">
              <h3>Junior Seo Designer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
            </div>
            <div className="hr-rate">
              <span>$25/hr</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Most_viewed;
