import React from "react";
import { getScrapedDataTJ } from "../../actions/scraping";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Top_tanitjobs = ({ getScrapedDataTJ }) => {
  let scrapedDataTJ = JSON.parse(localStorage.getItem("tanitjob"));
  return (
    <div className="suggestions full-width">
      <div className="sd-title">
        <h3>
          {" "}
          <img
            style={{ width: "80px", height: "30px" }}
            src="https://www.tanitjobs.com/templates/Tanitjobsv7/assets/images/logo-tanitjobs.jpg
              "
            className="mr-1"
          />
          Top tanit jobs
        </h3>
        <i className="la la-ellipsis-v"></i>
      </div>
      <div className="suggestions-list">
        {scrapedDataTJ === null ? (
          <h2>There is no jobs for the moment ! Visit us later !!</h2>
        ) : (
          scrapedDataTJ.map((data) => (
            <div className="suggestion-usd">
              <img src="images/resources/s6.png" alt="" />
              <span>
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-suitcase"></i>
                </a>
              </span>
              <div className="sgt-text">
                <h4>{data.title}</h4>
                <span>{data.company}</span>
                <span>{data.location}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

Top_tanitjobs.propTypes = {
  getScrapedDataTJ: PropTypes.func.isRequired,
};

export default connect(null, { getScrapedDataTJ })(Top_tanitjobs);
