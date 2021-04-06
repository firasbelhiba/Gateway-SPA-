import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Report_Form = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-12">
          <form className="form_create">
            <h1 className="h1">Report post</h1>
            <fieldset>
              <legend>Why do you want to report?</legend>
              <label className="mt-5" htmlFor="name">
                Reason
              </label>
              <textarea
                rows="10"
                cols="50"
                className="input"
                type="text"
                id="reason"
                placeholder="Reason"
                name="reason"
              />
              <small className="form-text">Precise the reason</small>
            </fieldset>
            <button className="button_form" type="submit">
              Report
            </button>
            <Link to="/forum" className="btn btn-light my-1">
              Go back{" "}
            </Link>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Report_Form;
