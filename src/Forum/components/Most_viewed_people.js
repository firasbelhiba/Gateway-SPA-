import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Most_viewed_people = ({ profile: { most_viewed_profile_list } }) => {
  return (
    <div className="widget suggestions full-width">
      <div className="sd-title">
        <h3>Top 5 Most Viewed People</h3>
        <i className="la la-ellipsis-v"></i>
      </div>
      <div className="suggestions-list">
        {most_viewed_profile_list.map((item) => (
          <div className="suggestion-usd">
            <img
              src={item.avatar}
              alt=""
              style={{ width: "40px", height: "40px" }}
            />
            <div className="sgt-text">
              <h4>{item.name}</h4>
              <span>{item.status}</span>
            </div>
            {/* <span>
              <i className="la la-plus"></i>
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
};
Most_viewed_people.prototype = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, {})(Most_viewed_people);
