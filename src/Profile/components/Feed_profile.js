import React from "react";
import Post_shared_item from "./items/Post_shared_item";

export const Feed_profile = ({ sharedList }) => {
  return (
    <div className="posts-section">
      {sharedList.map((post) => (
        <Post_shared_item item={post} />
      ))}
    </div>
  );
};
