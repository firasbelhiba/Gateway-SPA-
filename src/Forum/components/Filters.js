import React from "react";

const Filters = () => {
  return (
    <div className="filter-secs">
      <div className="filter-heading">
        <h3>Filters</h3>
        <a href="#" title="">
          Clear all filters
        </a>
      </div>
      <div className="paddy">
        <div className="filter-dd">
          <div className="filter-ttl">
            <h3>Category</h3>
            <a href="#" title="">
              Clear
            </a>
          </div>
          <form>
            <input
              type="text"
              name="search-skills"
              placeholder="Search skills"
            />
          </form>
        </div>
        <div className="filter-dd">
          <div className="filter-ttl">
            <h3>Date post</h3>
            <a href="#" title="">
              Clear
            </a>
          </div>
          <ul className="avail-checks">
            <li>
              <input type="radio" name="cc" id="c1" />
              <label for="c1">
                <span></span>
              </label>
              <small>Today</small>
            </li>
            <li>
              <input type="radio" name="cc" id="c2" />
              <label for="c2">
                <span></span>
              </label>
              <small>This week</small>
            </li>
            <li>
              <input type="radio" name="cc" id="c3" />
              <label for="c3">
                <span></span>
              </label>
              <small>This month</small>
            </li>
            <li>
              <input type="radio" name="cc" id="c3" />
              <label for="c3">
                <span></span>
              </label>
              <small>This Year</small>
            </li>
            <li>
              <input type="radio" name="cc" id="c3" />
              <label for="c3">
                <span></span>
              </label>
              <small>All</small>
            </li>
          </ul>
        </div>
        <div className="filter-dd">
          <div className="filter-ttl">
            <h3>Sort by : </h3>
            <a href="#" title="">
              Clear
            </a>
          </div>
          <form className="job-tp">
            <select>
              <option value="0">Choose a type</option>
              <option>Sort by views</option>
              <option>Sort by comments</option>
              <option>Sort by likes</option>
            </select>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filters;
