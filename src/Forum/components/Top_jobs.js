import React from "react";
import { getScrapedData } from "../../actions/scraping";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Top_jobs = ({ getScrapedData }) => {
  let scrapedDataSO = JSON.parse(localStorage.getItem("stackoverflow"));

  return (
    <div>
      <div className="widget widget-jobs mt-3">
        <div className="sd-title">
          <h3>
            {" "}
            <img
              onClick={() => getScrapedData()}
              style={{ width: "30px", height: "30px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
            />
            StackoverFlow top Jobs
          </h3>
          <i className="la la-ellipsis-v"></i>
        </div>
        <div className="jobs-list">
          {scrapedDataSO === null ? (
            <h1>There is no jobs for the moment ! Visit us later !!</h1>
          ) : (
            scrapedDataSO.map((data) => (
              <div className="suggestion-usd">
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={data.image}
                  alt=""
                />
                <span>
                  <a
                    href={"https://stackoverflow.com" + data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-stack-overflow"></i>
                  </a>
                </span>
                <div className="sgt-text mt-1">
                  <h4>{data.title}</h4>
                  <span>{data.type}</span>
                  <br></br>
                  <span>{data.experience}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

Top_jobs.propTypes = {
  getScrapedData: PropTypes.func.isRequired,
};

export default connect(null, { getScrapedData })(Top_jobs);
