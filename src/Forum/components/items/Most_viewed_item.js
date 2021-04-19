import React from "react";

const Most_viewed_item = ({ post }) => {
  return (
    <div className="job-info">
      <div className="job-details">
        <h3>{post.title}</h3>
        <p>by {post.name}</p>
      </div>
      <div className="hr-rate">
        <span>{post.views.length} views</span>
      </div>
    </div>
  );
};

export default Most_viewed_item;
