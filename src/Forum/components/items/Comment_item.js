import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteComment } from "../../../actions/post";

const Comment_item = ({
  postId,
  comment: { _id, text, user, name, avatar, date },
  auth,
  deleteComment,
  
}) => {
  return (
    <div>
      <li>
        {!auth.loading && user === auth.user._id && (
          <div className="ed-opts">
            <a onClick={(e) => deleteComment(postId, _id)}>
              <i
                class="fa fa-trash-o"
                style={{ color: "#153B44" }}
                aria-hidden="true"
              ></i>
            </a>
          </div>
        )}
        <div className="bg-img">
          <img src={avatar} alt="" style={{ width: "40px", height: "40px" }} />
          <div className="comment-list">
            <div className="comment">
              <h3>{name}</h3>
              <span>
                <img src="assets/images/clock.png" alt="" />{" "}
                <Moment format="YYYY/MM/DD">{date}</Moment>
              </span>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};
Comment_item.propTypes = {
  auth: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.number.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { deleteComment })(Comment_item);
