import React, { useState } from "react";
import Most_viewed_item from "./items/Most_viewed_item";

const Most_viewed = ({ posts }) => {
  let postCopy = posts.slice();

  const [sortedList, setSortedList] = useState(postCopy.sort(compare));
  let dateSortedList = [];
  let Top5 = [];

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

  for (var i = 0; i < sortedList.length; i++) {
    if (
      sortedList[i].date.substr(6, 1).toString() === currentMonth.toString()
    ) {
      dateSortedList.push(sortedList[i]);
    }
  }

  if (dateSortedList.length === 1) Top5.push(dateSortedList[0]);

  if (dateSortedList.length === 2) {
    Top5.push(dateSortedList[0]);
    Top5.push(dateSortedList[1]);
  }
  if (dateSortedList.length === 3) {
    Top5.push(dateSortedList[0]);
    Top5.push(dateSortedList[1]);
    Top5.push(dateSortedList[2]);
  }
  if (dateSortedList.length === 4) {
    Top5.push(dateSortedList[0]);
    Top5.push(dateSortedList[1]);
    Top5.push(dateSortedList[2]);
    Top5.push(dateSortedList[3]);
  }
  if (dateSortedList.length === 5) {
    Top5.push(dateSortedList[0]);
    Top5.push(dateSortedList[1]);
    Top5.push(dateSortedList[2]);
    Top5.push(dateSortedList[3]);
    Top5.push(dateSortedList[4]);
  }



  if (dateSortedList.length > 5) {
    for (var i = 0; i < 5; i++) {
      Top5.push(dateSortedList[i])
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
          {Top5.map((post) => (
            <Most_viewed_item post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Most_viewed;
