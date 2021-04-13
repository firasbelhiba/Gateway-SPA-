import React, { Fragment } from "react";
import Post_shared_item from "./items/Post_shared_item";

export const Feed_profile = ({ sharedList }) => {
  return (
    <div className="posts-section">

      {sharedList.length === 0 ? <h2>No post Shared for the moment ! </h2> : <Fragment>
        {sharedList.map((post) => (
          <Post_shared_item item={post} />
        ))}
      </Fragment>}


    </div>
  );
};
