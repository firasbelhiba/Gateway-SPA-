import React, { useState } from "react";
import Most_viewed_item from "./items/Most_viewed_item";

const Most_viewed = ({ posts }) => {
  let postCopy = posts.slice();

  const [sortedList, setSortedList] = useState(postCopy.sort(compare));
  let dateSortedList = [];

  var currentDate = new Date();
  var currentMonth = currentDate.getMonth() + 1;

  // if (sortedList[0].date.substr(6, 1).toString() === currentMonth.toString()) {
  //   console.log("oui");
  // }

  function compare(a, b) {
    if (a.views.length < b.views.length) {
      return 1;
    }
    if (a.views.length > b.views.length) {
      return -1;
    }
    return 0;
  }

  for (var i = 0; i < 5; i++) {
    if (
      sortedList[i].date.substr(6, 1).toString() === currentMonth.toString()
    ) {
      dateSortedList.push(sortedList[i]);
    }
  }

  return (
    <div>
      <div className="widget widget-jobs">
        <div className="sd-title">
          <h3>Most Viewed This Month</h3>
          <i className="la la-ellipsis-v"></i>
        </div>
        <div className="jobs-list">
          {dateSortedList.map((post) => (
            <Most_viewed_item post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Most_viewed;
