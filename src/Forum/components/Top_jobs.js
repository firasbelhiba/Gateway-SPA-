import React from "react";

const Top_jobs = () => {
  let scrapedDataSO = JSON.parse(localStorage.getItem("stackoverflow"));

  return (
    <div>
      <div className="widget widget-jobs mt-3">
        <div className="sd-title">
          <h3>StackoverFlow top Jobs</h3>
          <i className="la la-ellipsis-v"></i>
        </div>
        <div className="jobs-list">
          {scrapedDataSO.map((data) => (
            <div className="suggestion-usd">
              <img src={data.image} alt="" />
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top_jobs;
