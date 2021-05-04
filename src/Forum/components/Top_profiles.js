import React from "react";
import Most_talented_item from "../components/items/Most_talented_item";

const Top_profiles = () => {
  let mostTalentedList = JSON.parse(
    localStorage.getItem("most_talented_people")
  );

  return (
    <div>
      <div className="posts-section">
        <div className="top-profiles">
          <div className="pf-hd">
            <h3>Most talented</h3>
            <i className="la la-ellipsis-v"></i>
          </div>
          <div className="profiles-slider">
            {mostTalentedList === null ? (
              <h2>No users for the moment ! Come back later or refresh !</h2>
            ) : (
              mostTalentedList.map((item) => <Most_talented_item item={item} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top_profiles;
