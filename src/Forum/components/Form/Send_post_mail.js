import React, { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { sendPostMail } from "../../../actions/post";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Send_post_mail = ({ sendPostMail, history }) => {
  let query = useQuery();
  const [formData, setformData] = useState({ email: "", message: "" });
  const { email, message } = formData;

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    sendPostMail(formData, query.get("id"), history);
  };
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-12">
          <form
            className="form_create"
            onSubmit={(e) => {
              onSubmit(e);
            }}
          >
            <h1 className="h1">Send post</h1>
            <fieldset>
              <label className="mt-5" htmlFor="name">
                To:
              </label>
              <input
                className="input"
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
              <label className="mt-5" htmlFor="name">
                Message
              </label>
              <textarea
                rows="10"
                cols="50"
                className="input"
                type="text"
                id="message"
                placeholder="Message"
                name="message"
                value={message}
                onChange={(e) => onChange(e)}
              />
              <small className="form-text">
                Type a message for your recepient
              </small>
            </fieldset>
            <button className="button_form" type="submit">
              Send
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
Send_post_mail.prototype = {
  sendPostMail: PropTypes.func.isRequired,
};
export default connect(null, { sendPostMail })(Send_post_mail);
