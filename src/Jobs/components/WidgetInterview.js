import React from "react";
import { Link } from "react-router-dom";

const WidgetInterview = () => {
  return (
    <div className="widget widget-about">
      <img src="assets/images/Gateway.png" alt="" />
      <h3>Welcome to Gateway</h3>
      <span>Best way to success</span>
      <div className="sign_link">
        <h3>
          <Link to="/video" title="">
            Go for interview
          </Link>
        </h3>
        
      </div>
    </div>
  );
};

export default WidgetInterview;
