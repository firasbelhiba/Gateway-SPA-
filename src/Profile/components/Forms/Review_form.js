import React, { Fragment, useState } from 'react'
import ReactRating from 'react-rate-thing'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addReview, notifyMe, notifyOtherUser } from '../../../actions/profile'
import { Redirect } from 'react-router'


const Review_form = ({ addReview, id, notifyMe, notifyOtherUser, hisName, myName }) => {

    const [text, setText] = useState("");

    const [rate, selectRate] = useState(0);

    const [state, setstate] = useState(false)

    const onSubmit = e => {
        e.preventDefault();
        addReview(text, rate, id)
        setstate(true)
        notifyMe(`You reviewed ${hisName}`);
        notifyOtherUser(`${myName} reviewed your profile `, id);
    }

    if (state) {
        return <Redirect to='/forum' />;
    }

    return (
        <Fragment>
            <div className="post-project-fields">
                <form onSubmit={(e) => onSubmit(e)}>

                    <div className="row">
                        <div className="col-lg-12">

                            <div class="col">
                                <label className="" htmlFor="name">
                                    Reason :
                            </label>
                                <div className="col-lg-12">
                                    <textarea
                                        rows="10"
                                        cols="50"
                                        className="input"
                                        type="text"
                                        id="text"
                                        placeholder="Message"
                                        name="text"
                                        onChange={(e) => setText(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div class="col">
                                <label className="" htmlFor="name">
                                    Reason :
                            </label>
                                <div className="col-lg-12">
                                    <ReactRating value={rate} onClick={selectRate} />
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <button className="active mt-2" type="submit">
                                        Add
                                    </button>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        Cancel
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}


Review_form.propTypes = {
    addReview: PropTypes.func.isRequired,
    notifyMe: PropTypes.func.isRequired,
    notifyOtherUser: PropTypes.func.isRequired,
};

export default connect(null, {
    addReview, notifyMe,
    notifyOtherUser
})(Review_form)
