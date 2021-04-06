import React, { Fragment, useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateExperience, getCurrentProfile } from '../../../actions/profile';


const Experience_edit_form = ({ id, updateExperience, getCurrentProfile, profile: { profile, loading }, history }) => {

    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        form: '',
        to: '',
        current: false,
        description: ''
    });

    let index = profile.experience.findIndex(x => x._id === id);


    // useEffect(() => {
    //     getCurrentProfile();

    //     setFormData({
    //         company: loading || !profile.experience[index].company ? '' : profile.experience[index].company,
    //         title: loading || !profile.experience[index].title ? '' : profile.experience[index].title,
    //         location: loading || !profile.experience[index].location ? '' : profile.experience[index].location,
    //         from: loading || !profile.experience[index].from ? '' : profile.experience[index].from,
    //         to: loading || !profile.experience[index].to ? '' : profile.experience[index].to,
    //         current: loading || !profile.experience[index].current ? '' : profile.experience[index].current,
    //         description: loading || !profile.experience[index].description ? '' : profile.experience[index].description,

    //     });

    // }, [loading]);

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { company, title, location, from, to, current, description } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        updateExperience(formData, history, id)
    }


    return (
        <Fragment>
            <div className="post-project-fields">
                <form onSubmit={(e) => onSubmit(e)}>

                    <div className="row">

                        <div class="form-row">
                            <div class="col">
                                <div className="col-lg-12">
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Title"
                                        value={title}
                                        onChange={(e) => onChange(e)}
                                    />
                                </div>
                            </div>

                            <div class="col">
                                <div className="col-lg-12">
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Company"
                                        value={company}
                                        onChange={(e) => onChange(e)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col">
                                <div className="col-lg-12">
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="Location"
                                        value={location}
                                        onChange={(e) => onChange(e)}
                                    />
                                </div>
                            </div>


                            <div class="col">
                                <div className="col-lg-12">
                                    <input
                                        type="date"
                                        name="from"
                                        placeholder="From"
                                        value={from}
                                        onChange={(e) => onChange(e)}
                                    />
                                </div>
                            </div>
                        </div>


                        <div class="form-row">
                            <div class="col">
                                <div className="col-lg-12">
                                    <input
                                        type="date"
                                        name="to"
                                        placeholder="To"
                                        value={to}
                                        onChange={(e) => onChange(e)}
                                        disabled={toDateDisabled ? 'disabled' : ''}
                                    />
                                </div>
                            </div>

                            <div class="col">
                                <p><input
                                    className="input"

                                    type="checkbox"
                                    name="current"
                                    value={current}
                                    checked={current}
                                    onChange={e => {
                                        setFormData({ ...formData, current: !current });
                                        toggleDisabled(!toDateDisabled)
                                    }}
                                />Current job</p>
                            </div>
                        </div>


                        <div className="col-lg-12">
                            <textarea
                                name="description"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => onChange(e)}
                            ></textarea>
                        </div>

                        <div className="col-lg-12">
                            <ul>
                                <li>
                                    <button className="active" type="submit">
                                        Update
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


Experience_edit_form.propTypes = {
    updateExperience: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { updateExperience, getCurrentProfile })(withRouter(Experience_edit_form))