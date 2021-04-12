import React from "react";
import Moment from "react-moment";
import Post_item from "../../../Forum/components/Post_item";

const Post_shared_item = ({ item }) => {
  return (
    <div>
      <Post_item post={item} showActions={false} />
    </div>
  );
};

export default Post_shared_item;
