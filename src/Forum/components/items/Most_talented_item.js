import React, { Fragment } from "react";

const Most_talented_item = ({ item }) => {
  return (
    <Fragment>
      <div className="user-profy">
        <img
          src={item.avatar}
          alt=""
          style={{ height: "50px", width: "50px" }}
        />
        <h3>{item.name}</h3>
        <span>{item.status}</span>
        <span>{item.score[0].total_score}</span>
      </div>
    </Fragment>
  );
};

export default Most_talented_item;
