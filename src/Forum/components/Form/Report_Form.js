import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { addReport } from "../../../actions/post";
import { toast } from "react-toastify";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Report_Form = ({ addReport, history }) => {
  let query = useQuery();
  const [reason, setReason] = useState("");
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-12">
          <form
            className="form_create"
            onSubmit={(e) => {
              e.preventDefault();
              if (reason === "") {
                toast.error("Reason is required !", {
                  position: toast.POSITION.BOTTOM_LEFT,
                });
              } else {
                addReport({ reason }, query.get("id"), history);
                toast.success("Report sent sucessfully !", {
                  position: toast.POSITION.BOTTOM_LEFT,
                });
                toast.info("Thanks for your feedback !", {
                  position: toast.POSITION.BOTTOM_LEFT,
                });
                setReason("");
              }
            }}
          >
            <h1 className="h1_profile">Report post</h1>
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
                onChange={(e) => setReason(e.target.value)}
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
Report_Form.propTypes = {
  addReport: PropTypes.func.isRequired,
};

export default connect(null, { addReport })(Report_Form);
