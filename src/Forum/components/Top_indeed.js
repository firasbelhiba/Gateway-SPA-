import React from "react";
import { getScrapedDataIndeed } from "../../actions/scraping";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReactRating from "react-rate-thing";

const Top_indeed = ({ getScrapedDataIndeed }) => {
  let scrapedDataIndeed = JSON.parse(localStorage.getItem("indeed"));

  return (
    <div className="suggestions full-width">
      <div className="sd-title">
        <h3>
          {" "}
          <img
            style={{ width: "30px", height: "30px" }}
            src="https://play-lh.googleusercontent.com/_sJ-ST-crO8lxIzTv44xv_hiZvA6X7X2-8jSjhha2RfYcGSgACRod38yA6dfmcJHy_M"
            className="mr-1"
          />
          Top Indeed jobs
        </h3>
        <i className="la la-ellipsis-v"></i>
      </div>
      <div className="suggestions-list">
        {scrapedDataIndeed === null ? (
          <h1>There is no jobs for the moment ! Visit us later !!</h1>
        ) : (
          scrapedDataIndeed.map((data) => (
            <div className="suggestion-usd">
              <span>
                <a
                  href={"https://www.indeed.com" + data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-suitcase"></i>
                </a>
              </span>
              <div className="sgt-text">
                <h4>
                  <img
                    className="mr-2"
                    style={{ width: "30px", height: "30px" }}
                    src={data.image}
                    alt=""
                  />{" "}
                  {data.title}
                </h4>
                <br />
                {
                  <span>
                    <ReactRating value={data.rate} />
                  </span>
                }
                <br />
                <span>{data.description}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
Top_indeed.propTypes = {
  getScrapedDataIndeed: PropTypes.func.isRequired,
};
export default connect(null, { getScrapedDataIndeed })(Top_indeed);
